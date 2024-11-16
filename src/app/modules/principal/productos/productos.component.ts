import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  products = [
    { name: 'Producto 1', description: 'Descripción del producto 1', price: 10.99, image: 'https://via.placeholder.com/150' },
    { name: 'Producto 2', description: 'Descripción del producto 2', price: 20.99, image: 'https://via.placeholder.com/150' },
    { name: 'Producto 3', description: 'Descripción del producto 3', price: 30.99, image: 'https://via.placeholder.com/150' }
  ];
}
