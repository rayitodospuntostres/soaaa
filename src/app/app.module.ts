import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importación necesaria

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './modules/principal/cabecera/cabecera.component';
import { FooterComponent } from './modules/principal/footer/footer.component';
import { PrincipalModule } from './modules/principal/principal.module';
import { ProductosAdminService } from './services/productos-admin.service';
import { ProductService } from './services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrincipalModule,
    BrowserAnimationsModule


  ],
  providers: [ProductService, ProductosAdminService],

  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
