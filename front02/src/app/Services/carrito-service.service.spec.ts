import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito-service.service';

describe('CarritoServiceService', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
