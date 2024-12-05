// src/app/modules/principal/principal.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    NosotrosComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
  ],
})
export class PrincipalModule {}
