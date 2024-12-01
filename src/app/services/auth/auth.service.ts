// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../../models/login.model';
import { RegisterModel } from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8099/api/v1/auth'; // Asume que tienes configurada la URL base en tu entorno
  constructor(private http: HttpClient) {}

  // Método para login
  login(request: LoginModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, request);
  }

  // Método para registro
  register(request: RegisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, request);
  }
}
