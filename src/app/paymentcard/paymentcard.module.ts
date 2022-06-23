import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentcardPageRoutingModule } from './paymentcard-routing.module';

import { PaymentcardPage } from './paymentcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentcardPageRoutingModule
  ],
  declarations: [PaymentcardPage]
})
export class PaymentcardPageModule {}
