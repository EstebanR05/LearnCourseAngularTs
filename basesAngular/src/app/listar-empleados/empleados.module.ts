import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/main-empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { agregarEmpleadoComponent } from './empleados/agregarEmpleados/agregarEmpleados.component';
import { ListarEmpleadoComponent } from './empleados/listarEmpleados/listarEmpleados.component';



@NgModule({
  declarations: [
    EmpleadosComponent,
    agregarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  exports:[
    EmpleadosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
