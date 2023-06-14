import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarritoService } from 'src/app/Services/carrito-service.service';

@Component({
  selector: 'app-validacion-carrito',
  templateUrl: './validacion-carrito.component.html',
  styleUrls: ['./validacion-carrito.component.css']
})
export class ValidacionCarritoComponent implements OnInit {
  elementos: any[] = [
    { img: './assets/icons/RunRun.jpg', producto: 'Patineta Electrica', precio: 3000000, cantidad: 3 },
    { img: './assets/icons/Aifon.jpeg', producto: 'Apple Iphone 14 ', precio: 5000000, cantidad: 5 },
    { img: './assets/icons/AirFryer.jpg', producto: 'Air Fryer', precio: 500000, cantidad: 2 },
  ];

  carrusel: any[] = [
    { img: './assets/icons/LogiG635.jpg', producto: 'Audifonos diadema Logitech G635', precio: 300000},
    { img: './assets/icons/Samsung.jpg', producto: 'Televisor Samsung 55" 4k', precio: 3200000},
    { img: './assets/icons/Aifon.jpeg', producto: 'Apple Iphone 14 ', precio: 130000},
    { img: './assets/icons/AirFryer.jpg', producto: 'Air Fryer', precio: 500000},
    { img: './assets/icons/RunRun.jpg', producto: 'Patineta Electrica', precio: 300000},
    { img: './assets/icons/Aspiradora.jpg', producto: 'Aspiradora Inteligente', precio: 2000000 },
    
  ];

  responsiveOptions = [
    {
      breakpoint: '768px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4
    }
  ];
  

  cuponForm!: FormGroup;
  cupon: string = '';

  constructor(private formBuilder: FormBuilder, private carritoService: CarritoService) {}

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

  send(): any {
    const elementos = this.elementos;
    this.carritoService.setElementos(elementos);
    // Resto del código para enviar los datos al formulario o realizar otras acciones.
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


