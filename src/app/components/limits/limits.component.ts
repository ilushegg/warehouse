import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LimitModel } from 'src/app/models/limit';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.scss']
})
export class LimitsComponent {

  public limitForm = this._fb.group({
    number: [null, Validators.required],
    quantity: [0, Validators.required],
  })

  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
  ) { }

  save() {
    this._calculationService.add(this.limitForm.value as LimitModel, Entity.LIMIT);
    location.reload();

  }

}
