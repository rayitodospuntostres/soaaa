// src/app/modules/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductosAdmComponent } from './productos-adm/productos-adm.component';

@NgModule({
  declarations: [
    ProductosAdmComponent, // Agregamos el componente ProductosAdm
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
