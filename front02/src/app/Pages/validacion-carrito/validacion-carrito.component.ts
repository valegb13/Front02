import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validacion-carrito',
  templateUrl: './validacion-carrito.component.html',
  styleUrls: ['./validacion-carrito.component.css']
})
export class ValidacionCarritoComponent implements OnInit {
  elementos: any[] = [
    { img: 'Foto', producto: 'Aifon', precio: 500, cantidad: 2 },
    { img: 'Foto', producto: 'RunRun', precio: 300, cantidad: 3 },
  ];

  cuponForm!: FormGroup;
  cupon: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.cuponForm = this.formBuilder.group({
      cupon: ['']
    });
  }

  eliminarElemento(elemento: any) {
    const indice = this.elementos.indexOf(elemento);
    if (indice !== -1) {
      this.elementos.splice(indice, 1);
    }
  }

  aumentarCantidad(dato: any) {
    dato.cantidad++;
  }

  disminuirCantidad(dato: any) {
    if (dato.cantidad > 0) {
      dato.cantidad--;
    }
  }

  calcularTotalProducto(item: any): number {
    return item.precio * item.cantidad;
  }

  calcularSubtotal(): number {
    let totalGeneral = 0;
    for (let item of this.elementos) {
      totalGeneral += this.calcularTotalProducto(item);
    }
    return totalGeneral;
  }

  aplicarCupon() {
    const cupon = this.cuponForm.value.cupon;
    console.log('Cupón aplicado:', cupon);
  }
}
