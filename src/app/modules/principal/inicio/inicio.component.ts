import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {


  constructor(
    private router: Router
  ) { }


  navigateToProductos(){
    this.router.navigate(['/principal/productos']);
  }

}
