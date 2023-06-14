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
import { PaisesComponent } from './Components/paises/paises.component';

//Componentes principales
import { FormularioEnvioComponent } from './Pages/formulario-envio/formulario-envio.component';
import { FormularioPagosComponent } from './Pages/formulario-pagos/formulario-pagos.component';
import { ValidacionCarritoComponent } from './Pages/validacion-carrito/validacion-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioEnvioComponent,
    FormularioPagosComponent,
    ValidacionCarritoComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
