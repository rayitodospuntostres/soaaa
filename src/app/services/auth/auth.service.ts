import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../../models/login.model';
import { RegisterModel } from '../../models/register.model';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/user/api/v1/user`;
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    this.isLoggedIn = !!this.getUserFromLocalStorage();
  }

  // Método para login
  login(request: LoginModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/login`, request, { headers: headers })
      .pipe(
        tap(response => {
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('isLogin', 'true'); 
          this.isLoggedIn = true;
        })
      );
  }

  // Método para registro
  register(request: RegisterModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/save`, request, { headers: headers })
      .pipe(
        tap(response => {
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('isLogin', JSON.stringify(true)); 
          this.isLoggedIn = true;
        })
      );
  }

  // Método para obtener el usuario desde el localStorage
  getUserFromLocalStorage(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Método para logout
  logout(): void {
    localStorage.removeItem('user');
    localStorage.setItem('isLogin',JSON.stringify(false))
    this.isLoggedIn = false;
    window.location.reload();
  }
}