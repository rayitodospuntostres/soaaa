import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductosAdmComponent } from './../dashboard/productos-adm/productos-adm.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductosAdmComponent, // Declarar el componente aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule, // Módulo para paginación
    MatButtonModule

  ],
})
export class DashboardModule {}
