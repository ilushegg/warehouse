import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimitsComponent } from './components/limits/limits.component';
import { RequestComponent } from './components/request/request.component';
import { LimitsViewComponent } from './pages/limits-view/limits-view.component';
import { NeedsAmountViewComponent } from './pages/needs-amount-view/needs-amount-view.component';
import { RequestsViewComponent } from './pages/requests-view/requests-view.component';

const routes: Routes = [
  {
    path: 'requests/add',
    component: RequestComponent
  },
  {
    path: 'limits/add',
    component: LimitsComponent
  },
  {
    path: 'requests',
    component: RequestsViewComponent
  },
  {
    path: 'limits',
    component: LimitsViewComponent
  },
  {
    path: 'need-amount',
    component: NeedsAmountViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
