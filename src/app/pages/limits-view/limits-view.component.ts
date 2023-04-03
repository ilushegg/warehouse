import { Component, OnInit } from '@angular/core';
import { LimitModel } from 'src/app/models/limit';
import { CalculationService, Entity } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-limits-view',
  templateUrl: './limits-view.component.html',
  styleUrls: ['./limits-view.component.scss']
})
export class LimitsViewComponent implements OnInit {

  constructor(
    private _calculationService: CalculationService
  ) {

    
  }
  ngOnInit(): void {
    this.limits =  this._calculationService.getAll(Entity.LIMIT) as LimitModel[]
  }


  limits: LimitModel[];

  changed($event: any) {
    this.limits = $event;
  }

}
