import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaisesComponent),
      multi: true
    }
  ]
})
export class PaisesComponent implements OnInit, ControlValueAccessor {
  paises: string[] = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Peru', 'Venezuela', 'Bolivia', 'Paraguay', 'Uruguay', 'Mexico', 'Costa Rica', 'Panama', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua'];
  paisControl = new FormControl('Colombia');
  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {}

  registerOnChange(fn: any): void {
    this.paisControl.valueChanges.subscribe(fn);
  }

  writeValue(val: any): void {
    val && this.paisControl.setValue(val, {emitEvent: false});
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) : void {
    isDisabled ? this.paisControl.disable() : this.paisControl.enable();
  }
}
