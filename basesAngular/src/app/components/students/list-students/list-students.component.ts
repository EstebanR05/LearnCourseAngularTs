import { Component, Input} from '@angular/core';
import { estudiante } from '../interface/students.interface';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
})
export class ListStudentsComponent {

@Input() estudiantes: estudiante[] = []

}
