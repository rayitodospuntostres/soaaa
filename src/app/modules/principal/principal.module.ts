// src/app/modules/principal/principal.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    InicioComponent, // Agregamos el componente Inicio
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
  ],
})
export class PrincipalModule {}
