import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.page.html',
  styleUrls: ['./paymentcard.page.scss'],
})
export class PaymentcardPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


}
