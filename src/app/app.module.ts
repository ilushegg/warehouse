import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RequestComponent } from './components/request/request.component';
import { LimitsComponent } from './components/limits/limits.component';


import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RequestViewComponent } from './components/request-view/request-view.component';
import { LimitViewComponent } from './components/limit-view/limit-view.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestsViewComponent } from './pages/requests-view/requests-view.component';
import { LimitsViewComponent } from './pages/limits-view/limits-view.component';
import { SearchComponent } from './components/search/search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NeedAmountComponent } from './components/need-amount/need-amount.component';
import { NeedAmountViewComponent } from './components/need-amount-view/need-amount-view.component';
import { NeedsAmountViewComponent } from './pages/needs-amount-view/needs-amount-view.component';
import { ChartModule } from 'primeng/chart';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';


registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    LimitsComponent,
    RequestViewComponent,
    LimitViewComponent,
    RequestsViewComponent,
    LimitsViewComponent,
    SearchComponent,
    NeedAmountComponent,
    NeedAmountViewComponent,
    NeedsAmountViewComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule,
    NzIconModule,
    ChartModule,
    NzFormModule,
    NzCollapseModule,
    NzModalModule,
    NzTableModule  
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
