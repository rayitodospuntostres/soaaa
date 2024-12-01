import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../../models/login.model';
import { RegisterModel } from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8099/api/v1/auth'; 

  constructor(private http: HttpClient) {}

  // Método para login
  login(request: LoginModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    
    });

    return this.http.post(`${this.apiUrl}/login`, request, {
      headers: headers,  
    });
  }

  // Método para registro
  register(request: RegisterModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });

    return this.http.post(`${this.apiUrl}/save`, request, {
      headers: headers,  
    });
  }
}
