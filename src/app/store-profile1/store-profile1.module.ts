import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreProfile1PageRoutingModule } from './store-profile1-routing.module';

import { StoreProfile1Page } from './store-profile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreProfile1PageRoutingModule
  ],
  declarations: [StoreProfile1Page]
})
export class StoreProfile1PageModule {}
