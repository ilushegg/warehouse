import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LimitModel } from 'src/app/models/limit';
import { NeedAmountModel } from 'src/app/models/need-amount';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-need-amount-view',
  templateUrl: './need-amount-view.component.html',
  styleUrls: ['./need-amount-view.component.scss']
})
export class NeedAmountViewComponent implements OnInit {

  @Input()
  needAmount: NeedAmountModel;


  public needAmountForm = this._fb.group({
    number: [''], 
    need: [0],
    exist: [0],
    limit: [0],
    limitPercent: [0],
  })

  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
  ) { }

  ngOnInit(): void {
    this.needAmountForm.patchValue(this.needAmount);
  }



}
