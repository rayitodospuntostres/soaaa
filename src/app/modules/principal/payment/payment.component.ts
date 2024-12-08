import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from './../../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
})
export class PaymentComponent implements OnInit {

  cartItems: any[] = [];
  totalPrice: number = 0;
  paymentForm!: FormGroup;

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private paymentService: PaymentService  
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.cartItems = navigation?.extras.state?.['cartItems'] || [];
  }

  ngOnInit(): void {
    this.calculateTotalPrice();
    this.initializeForm();
  }

  initializeForm(): void {
    this.paymentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  paymentProcess(): void {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    const formData = this.paymentForm.value;

    const paymentData = {
      id_order: 1, 
      mount: this.totalPrice,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0], 
      method: 'Credit Card', 
      card: formData.cardNumber, 
    };

 
    this.paymentService.processPayment(paymentData).subscribe({
      next: (response) => {
        console.log('Pago procesado correctamente:', response);
        alert('Pago procesado con éxito');
        this.router.navigate(['/success'], { state: { amount: this.totalPrice } });
      },
      error: (error) => {
        console.error('Error en el procesamiento del pago:', error);
        alert('Hubo un error al procesar el pago. Intenta nuevamente.');
      }
    });
  }
}
