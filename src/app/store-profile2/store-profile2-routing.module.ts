import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProfile2Page } from './store-profile2.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProfile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreProfile2PageRoutingModule {}
