import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionCarritoComponent } from './validacion-carrito.component';

describe('ValidacionCarritoComponent', () => {
  let component: ValidacionCarritoComponent;
  let fixture: ComponentFixture<ValidacionCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacionCarritoComponent]
    });
    fixture = TestBed.createComponent(ValidacionCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
