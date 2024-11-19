import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './modules/principal/productos/productos.component';
import { CabeceraComponent } from './modules/principal/cabecera/cabecera.component';
import { FooterComponent } from './modules/principal/footer/footer.component';
import { InicioComponent } from './modules/principal/inicio/inicio.component';
import { NosotrosComponent } from './modules/principal/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
