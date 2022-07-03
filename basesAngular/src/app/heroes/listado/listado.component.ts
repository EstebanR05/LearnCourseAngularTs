import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  public heroes: String[] = ['ironman', 'spiderman', 'hulk', 'badman'];
  public heroeBorrado: String = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  

}
