import { Component } from '@angular/core';

interface personaje {
  nombre: String;
  poder: Number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

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

  nuevo: personaje = {
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

