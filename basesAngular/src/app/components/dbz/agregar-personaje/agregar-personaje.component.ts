import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',

})
export class AgregarPersonajeComponent {

  constructor(private dbzService: DbzService) { }

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  // get nuevo() {
  //   return this.dbzService.nuevo;
  // }

  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  agregarPersonaje() {

    if (this.nuevo.nombre.trim().length === 0) { return }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
