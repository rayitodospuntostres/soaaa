import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { // Definimos el objeto 'credentials' que usaremos para el ngModel
    email: '',
    password: ''
  };

  onSubmit() {
    // Aquí manejarás el envío de datos, por ejemplo, enviarlos al servicio de autenticación
    console.log('Formulario de login enviado:', this.credentials);
  }
}
