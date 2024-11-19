import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 100.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 200.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 300.99,
      image: 'https://via.placeholder.com/150',
    },
  ];
}
