// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginModel: LoginModel = { username: '', password: '' };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {

  }


  login() {
    this.authService.login(this.loginModel).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/principal/productos']).then(() => {
          window.location.reload(); 
        });
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }
}
