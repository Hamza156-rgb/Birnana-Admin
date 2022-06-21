import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProfile1Page } from './store-profile1.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProfile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreProfile1PageRoutingModule {}
