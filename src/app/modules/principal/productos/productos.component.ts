import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'; // Ajustar ruta si es necesario

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  products: any[] = []; // Almacena la lista de productos obtenidos del backend

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los productos al iniciar el componente
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // Asigna los productos al array
    });
  }
}
