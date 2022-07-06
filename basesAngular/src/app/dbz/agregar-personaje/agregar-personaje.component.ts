import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',

})
export class AgregarPersonajeComponent {

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  agregarPersonaje() {

    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }


}
