import { Component} from '@angular/core';
import { datos } from '../interface/empleados.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {

  public nuevosEmpleados: datos = {
    nombre: '',
    apellido: '',
    email: ''
  }

  public empleados: datos[] = [
    {
      nombre: 'Esteban',
      apellido: 'restrepo',
      email: 'e05072003@gmail.com'
    },
    {
      nombre: 'rosalba',
      apellido: 'patarroyo',
      email: 'rosyencristo80@gmail.com'
    }
  ]

  agregarEmpleadosNuevos( argumento: datos){
    this.empleados.push(argumento);
  }
  
}
