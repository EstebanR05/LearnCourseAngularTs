import { Component, EventEmitter, Input, Output } from "@angular/core";
import { datos } from "../interface/empleados.interface";

@Component({
    selector: 'app-agregarEmpleado',
    templateUrl: './agregarEmpleados.component.html'
})

export class agregarEmpleadoComponent {

    @Input() nuevosEmpleados: datos = {
        nombre: '',
        apellido: '',
        email: ''
    }

    @Output() onNuevosEmpleados: EventEmitter<datos> = new  EventEmitter(); 

    agregarEmpleado() {
        if (this.nuevosEmpleados.nombre.trim().length === 0) { return }
    
        this.onNuevosEmpleados.emit(this.nuevosEmpleados)
        this.nuevosEmpleados = {
          nombre: '',
          apellido: '',
          email: ''
        }
        
      }
}