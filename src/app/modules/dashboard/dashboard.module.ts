import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductosAdmComponent } from './../dashboard/productos-adm/productos-adm.component';

@NgModule({
  declarations: [
    ProductosAdmComponent, // Declarar el componente aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    
  ],
})
export class DashboardModule {}
