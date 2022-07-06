import { Component } from '@angular/core';
import { estudiante } from '../interface/students.interface';

@Component({
  selector: 'app-seleccion-students',
  templateUrl: './seleccion-students.component.html',
})
export class SeleccionStudentsComponent {

  public estudiantes: estudiante[] = [
    {
      nombre: 'kenji',
      apellido: "sandoval",
      grado: 11,
      email: '21212@gmail.com',
    },
    {
      nombre: 'geraldine',
      apellido: "perez",
      grado: 12,
      email: '1232131232423@gmail.com',
    },
    {
      nombre: 'rosalba',
      apellido: "patarroyo",
      grado: 10,
      email: 'rosyta@gmail.com',
    }
  ];

  public nuevoEstudiante: estudiante = {
    nombre: '',
    apellido: '',
    grado: 0,
    email: '',
  };

  agregarNuevoEstudiante(argumento: estudiante) {
    this.estudiantes.push(argumento);
  }

}
