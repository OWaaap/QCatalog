import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  list = [
    'Category',
    'Brand',
    'Colour',
    'Price',
    'Size',
    'Specialti Sizes',
    'Material',
    'Customer Rating',
    'New Arrivals',
    'Best Sellers',
    'Availability',
    'Seller',
  ];

  constructor() {}

  ngOnInit(): void {}
}
