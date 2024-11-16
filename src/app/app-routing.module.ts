import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './modules/principal/productos/productos.component';

const routes: Routes = [
  { path: 'productos', loadChildren: () => import('./modules/principal/productos/productos.module').then(m => m.ProductosModule) },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: '**', redirectTo: 'productos' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
