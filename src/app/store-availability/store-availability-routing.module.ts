import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreAvailabilityPage } from './store-availability.page';

const routes: Routes = [
  {
    path: '',
    component: StoreAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreAvailabilityPageRoutingModule {}
