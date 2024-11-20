import { Component, OnInit } from '@angular/core';
import { ProductosAdminService } from '../../../services/productos-admin.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-productos-adm',
  templateUrl: './productos-adm.component.html',
  styleUrls: ['./productos-adm.component.css']
})
export class ProductosAdmComponent implements OnInit {
  productos: Producto[] = []; // Lista de productos

  constructor(private productosService: ProductosAdminService) {}

  ngOnInit(): void {
    this.obtenerProductos(); // Cargar productos al iniciar el componente
  }

  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe(
      (data) => {
        this.productos = data; // Asignar los productos al array
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
