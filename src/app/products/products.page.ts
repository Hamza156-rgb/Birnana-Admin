import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  product = [
    {
      'image': '../assets/products/1.png',
      'name': 'Vegetables',
      'up': '267',
      'down': '197'
    },
    {
      'image': '../assets/products/1.png',
      'name': 'Sweet Food',
      'up': '267',
      'down': '197'
    },
    {
      'image': '../assets/products/1.png',
      'name': 'Snacks',
      'up': '267',
      'down': '197'
    },
    {
      'image': '../assets/products/1.png',
      'name': 'Fruits',
      'up': '267',
      'down': '197'
    },
    {
      'image': '../assets/products/1.png',
      'name': 'Frozen Items',
      'up': '267',
      'down': '197'
    },

  ]


}
