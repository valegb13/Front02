import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './Pages/formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './Pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './Pages/formulario-pagos/formulario-pagos.component';


const routes: Routes = [
  {path: "formulario-envio", component: FormularioEnvioComponent},
  {path: "carrito", component: ValidacionCarritoComponent},
  {path: "pago", component: FormularioPagosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}