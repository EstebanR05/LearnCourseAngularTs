import { Component, EventEmitter, Input, Output } from '@angular/core';
import { estudiante } from '../interface/students.interface';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
})

export class CreateStudentsComponent {

  @Input() nuevoEstudiante: estudiante = {
    nombre: '',
    apellido: '',
    grado: 0,
    email: '',
  };

  @Output() onNuevoEstudiante: EventEmitter<estudiante> = new EventEmitter();

  agregar() {
    if (this.nuevoEstudiante.nombre.trim().length === 0) { return }

    this.onNuevoEstudiante.emit(this.nuevoEstudiante);
    this.nuevoEstudiante = {
      nombre: '',
      apellido: '',
      grado: 0,
      email: '',
    }
  }

}
