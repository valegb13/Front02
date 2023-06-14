import { Component } from '@angular/core';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent {
    formData = {
      name: '',
      email: '',
      message: ''
    };
  
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario, como una llamada a una API o el envío de un correo electrónico.
      // Puedes acceder a los valores del formulario utilizando this.formData.
      console.log(this.formData);
    }
}
