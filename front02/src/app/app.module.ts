import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//Header y footer
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

//Componentes principales
import { FormularioEnvioComponent } from './Pages/formulario-envio/formulario-envio.component';
import { FormularioPagosComponent } from './Pages/formulario-pagos/formulario-pagos.component';
import { ValidacionCarritoComponent } from './Pages/validacion-carrito/validacion-carrito.component';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioEnvioComponent,
    FormularioPagosComponent,
    ValidacionCarritoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
