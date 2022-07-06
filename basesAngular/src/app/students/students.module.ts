import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { SeleccionStudentsComponent } from './seleccion-students/seleccion-students.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListStudentsComponent,
    CreateStudentsComponent,
    SeleccionStudentsComponent
  ],
  exports:[
    ListStudentsComponent,
    CreateStudentsComponent,
    SeleccionStudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentsModule { }
