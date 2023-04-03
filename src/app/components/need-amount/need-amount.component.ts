import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LimitModel } from 'src/app/models/limit';
import { NeedAmountModel } from 'src/app/models/need-amount';
import { CalculationService, Entity } from 'src/app/services/calculation.service';


@Component({
  selector: 'app-need-amount',
  templateUrl: './need-amount.component.html',
  styleUrls: ['./need-amount.component.scss']
})
export class NeedAmountComponent{

  @Input()
  entities: NeedAmountModel[];

  @Output()
  entitiesChanged = new EventEmitter<NeedAmountModel[]>();

  public needAmountForm = this._fb.group({
    number: ['', Validators.required]
  })

  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
  ) { }

  define() {
    this._calculationService.defineNeedAmount(this.needAmountForm.get('number')?.value!);
  }


}
