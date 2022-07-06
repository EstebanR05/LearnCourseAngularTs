import { Component } from '@angular/core';

import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

 public nuevo: personaje = {
    nombre: '',
    poder: 0
   }


}

