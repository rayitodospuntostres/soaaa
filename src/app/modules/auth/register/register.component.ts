import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  // Método onSubmit sin parámetros
  onSubmit() {
    // Verificamos si el formulario es válido
    if (this.username && this.email && this.password && this.confirmPassword) {
      // Aquí puedes agregar la lógica para manejar el registro
      console.log('Formulario enviado correctamente');
      console.log(this.username, this.email, this.password, this.confirmPassword);

      // Llamar al servicio para registrar al usuario
      // this.authService.register(this.username, this.email, this.password);
    } else {
      console.log('Formulario inválido');
    }
  }
}
