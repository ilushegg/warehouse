import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LimitModel } from 'src/app/models/limit';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-limit-view',
  templateUrl: './limit-view.component.html',
  styleUrls: ['./limit-view.component.scss']
})
export class LimitViewComponent implements OnInit {

  @Input()
  limit: LimitModel;

  public limitForm = this._fb.group({
    id: ['', Validators.required],
    number: ['', Validators.required],
    quantity: [0, Validators.required],
  })


  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
    ) { }

    ngOnInit() {
      this.limitForm.patchValue(this.limit);
    }

    edit() {
      this._calculationService.edit(this.limitForm.value! as LimitModel, Entity.LIMIT);
      location.reload();

    }

    delete() {
      this._calculationService.delete(this.limitForm.controls.id.value!, Entity.LIMIT);
      location.reload();

    }

}
