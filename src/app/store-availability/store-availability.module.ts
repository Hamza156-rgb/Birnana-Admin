import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreAvailabilityPageRoutingModule } from './store-availability-routing.module';

import { StoreAvailabilityPage } from './store-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreAvailabilityPageRoutingModule
  ],
  declarations: [StoreAvailabilityPage]
})
export class StoreAvailabilityPageModule {}
