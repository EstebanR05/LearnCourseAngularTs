import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  exports:[
   EmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListarEmpleadosModule { }
