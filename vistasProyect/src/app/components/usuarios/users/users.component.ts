import { Component } from '@angular/core';
import { datos } from './interface/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public usuarios: datos[] = [
    {
      nombre: 'Bryan',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Michael',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Rachel',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Garrett',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Jamie',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Jessica',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Margan',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Jennifer',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Allison',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Philip',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
    {
      nombre: 'Hannah',
      nivel: 'nivel 1: mild',
      correo: 'Lorem ipsum',
      telefono: 52104777,
      ubicacion: 'mercedeschester Lorem ipsum Lorem ipsum',
    },
  ];

}
