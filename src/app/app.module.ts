import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importación necesaria

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './modules/principal/cabecera/cabecera.component';
import { FooterComponent } from './modules/principal/footer/footer.component';
import { PrincipalModule } from './modules/principal/principal.module';
import { ProductosAdminService } from './services/productos-admin.service';

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
    PrincipalModule


  ],
  providers: [ProductosAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
