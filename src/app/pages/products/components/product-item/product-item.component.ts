import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  product = {
    productName: 'Athletic Works Men Open Bottom Fleece Pants',
    productSize: 'Sizes S-2XL',
    productRating: 3,
    productPrice: 15,
  };
  constructor() {}

  ngOnInit(): void {}
}
