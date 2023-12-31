import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from 'src/app/Services/carrito-service.service';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css']
})

export class FormularioEnvioComponent implements OnInit {

  public formEnvios: FormGroup = new FormGroup({});
  
  elementos: any[] = [];

  constructor(private formBuilder: FormBuilder, private carritoService: CarritoService){

  }
  
  

  ngOnInit(): void {
    this.formEnvios = this.formBuilder.group({
      correo: this.formBuilder.group({
        correo: ['', [Validators.required, Validators.email]],
        correos_exclusivos: ['']
      }),
      datos: this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        pais: ['', Validators.required],
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
        direccion: ['', Validators.required]
      }),
      costo_envio: this.formBuilder.group({}),
      facturacion: this.formBuilder.group({
        cedula: ['', Validators.required],
        telefono: ['', Validators.required]
      })
    });

    this.elementos = this.carritoService.getElementos();
    console.log(this.elementos);
  }

  
  

  getSubtotal(): number {
    let subtotal = 0;
    for (const dato of this.elementos) {
      subtotal += dato.precio * dato.cantidad;
    }
    return subtotal;
  }

  getTotal(): number {
    const subtotal = this.getSubtotal();
    const envio = 15000;
    return subtotal + envio;
  }

  send(): any{
    console.log(this.formEnvios.value);
  }
  
}
