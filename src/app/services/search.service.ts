import { Injectable } from '@angular/core';
import { LimitModel } from '../models/limit';
import { NeedAmountModel } from '../models/need-amount';
import { RequestModel } from '../models/request';
import { Entity } from './calculation.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private keyWordRequest = 'BVIrequest ';
  private keyWordLimit = 'BVIlimits ';

  search(searchQuery: string, entities: RequestModel[] | LimitModel[] | NeedAmountModel[]): RequestModel[] | LimitModel[] | NeedAmountModel[] {
    let values: any = [];
    let withoutId = entities.map(({id, ...keepAttrs}) => keepAttrs);
    for(let i = 0; i < withoutId.length; i++){
      if(JSON.stringify(withoutId[i]).toString().toLowerCase().includes(searchQuery.toLowerCase())) {
        values.push(entities[i]);
      }
    }
    return values;
  }
}
