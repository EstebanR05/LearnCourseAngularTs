import { Component } from '@angular/core';
import { estudiante } from '../interface/students.interface';

@Component({
  selector: 'app-seleccion-students',
  templateUrl: './seleccion-students.component.html',
})
export class SeleccionStudentsComponent {

  public estudiantes: estudiante[] = [
    {
      nombre: 'isaac',
      apellido: "restrepo",
      grado: 8,
      email: 'ir01092008@gmail.com',
    },
    {
      nombre: 'geraldine',
      apellido: "perez",
      grado: 11,
      email: 'erp05072003@gmail.com',
    },
    {
      nombre: 'rosalba',
      apellido: "patarroyo",
      grado: 10,
      email: 'rosyencristo80@gmail.com',
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
