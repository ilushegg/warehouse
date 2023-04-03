import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestModel } from 'src/app/models/request';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.scss']
})
export class RequestViewComponent{

  @Input()
  request: RequestModel;

  public requestForm = this._fb.group({
    id: ['', Validators.required],
    date: ['', Validators.required],
    companyCode: ['', Validators.required],
    number: ['', Validators.required],
    measureCode: ['', Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required]
  })


  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
    ) { }

    ngOnInit() {
      this.requestForm.patchValue(this.request);
    }

    edit() {
      this._calculationService.edit(this.requestForm.value! as RequestModel, Entity.REQUEST);
      location.reload();
    }

    delete() {
      this._calculationService.delete(this.requestForm.controls.id.value!, Entity.REQUEST);
      location.reload();

    }


}
