import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEmpleadoComponent,
    EditEmpleadoComponent,
    ListEmpleadoComponent
  ],
  exports:[
    AddEmpleadoComponent,
    EditEmpleadoComponent,
    ListEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CrudModule { }
