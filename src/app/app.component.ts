import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { RequestModel } from './models/request';
import { CalculationService, Entity } from './services/calculation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Склад';


    constructor(
      private _calculationService: CalculationService
    ) {
      this.requests =  this._calculationService.getAll(Entity.REQUEST) as RequestModel[]
      
    }


    requests: RequestModel[];
}
