import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalBalancePageRoutingModule } from './total-balance-routing.module';

import { TotalBalancePage } from './total-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalBalancePageRoutingModule
  ],
  declarations: [TotalBalancePage]
})
export class TotalBalancePageModule {}
