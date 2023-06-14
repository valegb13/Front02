import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validacion-carrito',
  templateUrl: './validacion-carrito.component.html',
  styleUrls: ['./validacion-carrito.component.css']
})
export class ValidacionCarritoComponent implements OnInit {
  elementos: any[] = [
    { img: 'Foto', producto: 'Aifon', precio: 50000, cantidad: 2 },
    { img: 'Foto', producto: 'RunRun', precio: 300000, cantidad: 3 },
    { img: 'Foto', producto: 'bien', precio: 130000, cantidad: 5 },
  ];

  responsiveOptions = [
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
    }
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
    if (dato.cantidad > 1) {
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

  calcularEnvio(): string {
    const subtotal = this.calcularSubtotal();
  
    if (subtotal < 1000000) {
      return '$ 15.000';
    } else {
      return 'Envío gratis';
    }
  }
}


