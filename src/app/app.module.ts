import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './recursos/header/header.component';
import { FooterComponent } from './recursos/footer/footer.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ItemComponent } from './paginas/item/item.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AppRoutingModule } from './/app-routing.module';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    InicioComponent,
    ItemComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
