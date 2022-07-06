import { Component, Input } from "@angular/core";
import { datos } from "../interface/empleados.interface";

@Component({
selector: 'app-listarEmpleado',
templateUrl: './listarEmpleados.component.html'
})

export class ListarEmpleadoComponent {

@Input() empleados: datos[] = []

}