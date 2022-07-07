import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './main-empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { agregarEmpleadoComponent } from './agregarEmpleados/agregarEmpleados.component';
import { ListarEmpleadoComponent } from './listarEmpleados/listarEmpleados.component';



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
