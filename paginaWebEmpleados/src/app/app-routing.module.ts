import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './components/crud/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './components/crud/edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './components/crud/list-empleado/list-empleado.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo: 'AddEmpleadoComponent'},
  {path: 'Add-Empleado', component:AddEmpleadoComponent},
  {path: 'Edit-Empleado/:id', component:EditEmpleadoComponent},
  {path: 'List-Empleado', component:ListEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
