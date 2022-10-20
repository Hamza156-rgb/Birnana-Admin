import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalBalancePage } from './total-balance.page';

const routes: Routes = [
  {
    path: '',
    component: TotalBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalBalancePageRoutingModule {}
