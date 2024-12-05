import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {

  username: string = 'Iniciar sesion ';
  
  constructor(private authSerivce: AuthService,private router:Router) {
    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      if (userObj && userObj.username) {
        this.username = userObj.username;
      }
    }
  }

  logout(){
    this.authSerivce.logout();
    this.router.navigate(['/']);
  }
}