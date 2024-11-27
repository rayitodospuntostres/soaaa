import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductosAdmComponent } from './../dashboard/productos-adm/productos-adm.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
})
export class DashboardModule {}
