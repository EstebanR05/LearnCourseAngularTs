import { Component } from '@angular/core';
import { persona } from './interface/sucursales.interface';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent {
  
  public datosPersonas: persona[] = [
    {
      nombre: 'christopher bang',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Andy Ackerman',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Yujii Itadoria',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Eren Jaeger',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Armin Arlert',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Annie Leonhart',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Reiner Braun',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },
    {
      nombre: 'Erwin Smith',
      correo: 'usuario@tacabell.com',
      contrasena: 'i4w1011i',
      rol: 'administrador',
    },

  ];

}
