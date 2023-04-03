import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { RequestModel } from '../models/request';
import { UUID } from 'angular2-uuid';
import { LimitModel } from '../models/limit';
import { NeedAmountModel } from '../models/need-amount';


@Injectable({
  providedIn: 'root'
})
export class CalculationService{

  constructor() {
    this.limits.next(this.getAll(Entity.LIMIT) as LimitModel[]);
      this.requests.next(this.getAll(Entity.REQUEST) as RequestModel[]);
   }


  private keyWordRequest = 'BVIrequest ';
  private keyWordLimit = 'BVIlimits ';
  private keyWordNeedAMount = 'BVINeedAmount ';

  private requests = new BehaviorSubject<RequestModel[] | null>(null);
  private limits = new BehaviorSubject<LimitModel[] | null>(null);

  add(model: RequestModel | LimitModel | NeedAmountModel, entity: Entity): Observable<string> {
    let uuid = UUID.UUID();
    model.id = uuid;
    let keyWord = this.getKeyWord(entity);
    localStorage.setItem(keyWord + uuid, JSON.stringify(model));
    return of(uuid);
  }

  edit(model: RequestModel | LimitModel, entity: Entity): Observable<string> {
    let keyWord = this.getKeyWord(entity);
    localStorage.setItem(keyWord + model.id, JSON.stringify(model));
    return of(model.id!);
  }

  delete(id: string, entity: Entity): Observable<string> {
    let keyWord = this.getKeyWord(entity);
    localStorage.removeItem(keyWord + id)
    return of(id);
  }

  get(id: string, entity: Entity): Observable<RequestModel | LimitModel> {
    let keyWord = this.getKeyWord(entity);
    let req = localStorage.getItem(keyWord + id)
    return of(JSON.parse(req!));
  }

  getAll(entity: Entity): RequestModel[] | LimitModel[] | NeedAmountModel[] {
    let keyWord = this.getKeyWord(entity);
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      if (keys[i].includes(keyWord)) {
        values.push(JSON.parse(localStorage.getItem(keys[i])!));
      }
    }
    return values;
  }

  getKeyWord(entity: Entity) : string {
    if(entity === Entity.REQUEST) {
      return this.keyWordRequest;
    } else if (entity === Entity.LIMIT) {
      return this.keyWordLimit;
    }
    return this.keyWordNeedAMount;
  }

  getAllNumbers(): Set<string> {
    return new Set(this.getAll(Entity.REQUEST).map(en => en.number!));
  }

  defineNeedAmount(number: string): NeedAmountModel {
    let existArray = this.limits.getValue()?.filter(limit => limit.number == number);
    let needArray = this.requests.getValue()?.filter(request => request.number == number);
    let need = needArray?.reduce((acc, value) => acc + Number(value.quantity!), 0);
    let exist = existArray?.reduce((acc, value) => acc + Number(value.quantity!), 0);
    let res: NeedAmountModel = {
      id: UUID.UUID(),
      number: number,
      need: need!,
      exist: exist!,
      limit: -(exist!-need!),
      limitPercent: Math.floor(-(exist!-need!) / need! * (100)) 
    }
    return res;
  }


}


export enum Entity {
  REQUEST,
  LIMIT,
  NEED_AMOUNT,
}