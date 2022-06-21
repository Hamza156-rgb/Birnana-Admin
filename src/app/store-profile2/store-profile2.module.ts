import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreProfile2PageRoutingModule } from './store-profile2-routing.module';

import { StoreProfile2Page } from './store-profile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreProfile2PageRoutingModule
  ],
  declarations: [StoreProfile2Page]
})
export class StoreProfile2PageModule {}
