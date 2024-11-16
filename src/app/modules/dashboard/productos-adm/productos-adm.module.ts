import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosAdmRoutingModule } from './productos-adm-routing.module';
import { ProductosAdmComponent } from './productos-adm.component';


@NgModule({
  declarations: [
    ProductosAdmComponent
  ],
  imports: [
    CommonModule,
    ProductosAdmRoutingModule
  ]
})
export class ProductosAdmModule { }
