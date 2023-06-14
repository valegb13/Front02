import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  elementos: any[] = [];

  constructor() { }

  setElementos(elementos: any[]) {
    this.elementos = elementos;
  }

  getElementos() {
    return this.elementos;
  }
}
