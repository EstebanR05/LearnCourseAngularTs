import { Component } from '@angular/core';

import { personaje } from '../interface/dbz.interface';


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



}

