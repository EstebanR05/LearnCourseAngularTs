import { Component } from '@angular/core';

import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  public nuevo: personaje = {
    nombre: '',
    poder: 0
  }
  public listaPersonajes: personaje[] = [
    {
      nombre: 'goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 7500
    },
    {
      nombre: 'krilin',
      poder: 700
    }
  ];

  agregarNuevoPersonaje(argumento: personaje) {
    this.listaPersonajes.push(argumento);
  }

  constructor(private dbzService: DbzService) {

  }

}

