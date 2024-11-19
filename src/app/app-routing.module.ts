import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/principal/inicio/inicio.component';
import { ProductosComponent } from './modules/principal/productos/productos.component';
import { NosotrosComponent } from './modules/principal/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', redirectTo: '/12il', pathMatch: 'full' },
  { path: '12il', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
