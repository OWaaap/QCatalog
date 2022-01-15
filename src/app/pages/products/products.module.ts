import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatCardModule,
    BarRatingModule,
    MatPaginatorModule,
  ],
})
export class ProductListModule {}
