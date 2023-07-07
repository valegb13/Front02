import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './Pages/formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './Pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './Pages/formulario-pagos/formulario-pagos.component';
import { ContactarComponent } from './Components/contactar/contactar.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path: "formulario-envio", component: FormularioEnvioComponent},
  {path: "carrito", component: ValidacionCarritoComponent},
  {path: "pago", component: FormularioPagosComponent},
  {path: "contactar", component:ContactarComponent},
  {path: "login", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}