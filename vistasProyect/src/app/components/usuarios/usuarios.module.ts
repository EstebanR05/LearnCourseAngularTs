import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { UsersComponent } from './users/users.component';
import { CuponesDeliveryComponent } from './cupones-delivery/cupones-delivery.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarCategoriaComponent,
    SucursalesComponent,
    UsersComponent,
    CuponesDeliveryComponent,
  ],
  exports:[
    CrearUsuarioComponent,
    EditarCategoriaComponent,
    SucursalesComponent,
    UsersComponent,
    CuponesDeliveryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class UsuariosModule { }
