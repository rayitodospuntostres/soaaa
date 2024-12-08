import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit{

  username: string = 'Iniciar sesion ';

  usuarioActual: any;
  
  constructor(
    private authSerivce: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      if (userObj) {
        this.username = userObj.username || userObj.displayName || 'Iniciar sesion';
      }
    } else {
      this.username = 'Iniciar sesion';
    }
  }
  

  logout(){
    this.authSerivce.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {


   
  }
}