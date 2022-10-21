import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.page.html',
  styleUrls: ['./total-balance.page.scss'],
})
export class TotalBalancePage implements OnInit {

  sales = true;
  stock = false;



  constructor() { }

  ngOnInit() {
  }

  Topsales() {
    this.sales = true;
    this.stock = false;



  }

  Instock() {
    this.sales = false;
    this.stock = true;



  }



}
