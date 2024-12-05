import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cartItems: Producto[] = [];
  private cartItemsSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>(this.cartItems);

  constructor() {}

  // Método para agregar un producto al carrito
  addToCart(product: Producto): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity !== undefined) {
        existingProduct.quantity += 1; // Si el producto ya está en el carrito, solo incrementamos la cantidad
      }
    } else {
      product.quantity = 1; // Si es un producto nuevo, inicializamos la cantidad
      this.cartItems.push(product);
    }
    this.cartItemsSubject.next(this.cartItems); // Notificar a los suscriptores
  }

  // Método para actualizar la cantidad de un producto en el carrito
  updateCartItem(updatedItem: Producto): void {
    const existingProduct = this.cartItems.find(item => item.id === updatedItem.id);
    if (existingProduct) {
      existingProduct.quantity = updatedItem.quantity; // Actualizar la cantidad
    }
    this.cartItemsSubject.next(this.cartItems); // Notificar cambios
  }

  // Método para obtener los productos del carrito
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  // Método para vaciar el carrito
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
