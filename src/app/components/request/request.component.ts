import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestModel } from 'src/app/models/request';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  public requestForm = this._fb.group({
    id: [''],
    date: ['', Validators.required],
    companyCode: ['', Validators.required],
    number: [0, Validators.required],
    measureCode: [null, Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required]
  })


  constructor(
    private _fb: FormBuilder,
    private _calculationService: CalculationService
    ) { }


  save() {
    this._calculationService.add(this.requestForm.value as RequestModel, Entity.REQUEST);
    location.reload();

  }

}
