import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, HeaderComponent, MatExpansionModule],
})
export class SharedModule {}
