import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class  LoginComponent {
  public loginModalVisible: boolean = false;

  public showLoginModal(): void {
    this.loginModalVisible = true;
  }

  public hideLoginModal(): void {
    this.loginModalVisible = false;
  }

  public submitLoginForm(): void {
    // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
    // por ejemplo, llamar a un servicio para autenticar al usuario
  }
}