import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { CarService } from 'src/app/services/car.service'; // Importar el servicio del carrito

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class CarritoComponent implements OnInit {
  cartItems: Producto[] = [];

  constructor(private cartService: CarService) { }

  ngOnInit(): void {
    // Suscribirse a los cambios del carrito
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  // Método para aumentar la cantidad del producto
  increaseQuantity(item: any): void {
    item.quantity += 1;
    this.updateQuantity(item); // Actualizar la cantidad
  }

  // Método para disminuir la cantidad del producto
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateQuantity(item); // Actualizar la cantidad
    }
  }

  // Método para actualizar la cantidad del producto
  updateQuantity(item: any): void {
    this.cartService.updateCartItem(item); // Actualizar el producto en el servicio
  }

  // Método para vaciar el carrito
  clearCart(): void {
    this.cartService.clearCart();
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCartItem(item);
    }
  }


  checkout(): void {
    alert('Compra realizada con éxito');

  }
}