import { Component, Input } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService) { }

  get listaPersonajes(): personaje[] {
    return this.dbzService.listaPersonajes;
  }

}
