import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true,
  imports: [],
})
export class PaymentComponent {

  cartItems: any[];
  totalPrice: number = 0;


  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.cartItems = navigation?.extras.state?.['cartItems'] || [];
  }

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
