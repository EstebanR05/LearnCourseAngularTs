import { Component, Input} from '@angular/core';
import { personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  
})
export class AgregarPersonajeComponent {
  
  @Input() listaPersonajes: personaje[] = [];

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  agregarPersonaje() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }

    console.log(this.nuevo)
    this.listaPersonajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
