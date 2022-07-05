import { Component, OnInit } from '@angular/core';

interface datos {
  nombre: String;
  apellido: String;
  email: String;
}

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleados: datos[] = [
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

  nuevosEmpleados: datos = {
    nombre: '',
    apellido: '',
    email: ''
  }

  agregarEmpleado() {
    if (this.nuevosEmpleados.nombre.trim().length === 0) { return }
    if (this.nuevosEmpleados.apellido.trim().length === 0) { return }
    if (this.nuevosEmpleados.email.trim().length === 0) { return }

    console.log(this.nuevosEmpleados);
    this.empleados.push(this.nuevosEmpleados);
    this.nuevosEmpleados = {
      nombre: '',
      apellido: '',
      email: ''
    }
  }
}
