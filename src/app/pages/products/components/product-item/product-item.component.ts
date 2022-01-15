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

  showGallery(index: number) {
    let prop = {
      images: [
        {
          path: 'https://i5.walmartimages.ca/images/Enlarge/803/355/6000198803355.jpg',
        },
        {
          path: 'https://i5.walmartimages.ca/images/Enlarge/803/474/6000198803474.jpg',
        },
        {
          path: 'https://i5.walmartimages.ca/images/Enlarge/803/408/6000198803408.jpge',
        },
        { path: 'path_to_image_full_image' },
      ],
      index,
    };
  }
}
