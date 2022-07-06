import { Injectable } from "@angular/core";
import { personaje } from "../interface/dbz.interface";

@Injectable()

export class DbzService {

    private _listaPersonajes: personaje[] = [
        {
            nombre: 'goku',
            poder: 15000
        },
        {
            nombre: 'vegeta',
            poder: 7500
        },
        {
            nombre: 'krilin',
            poder: 700
        }
    ];

    get listaPersonajes(): personaje[] {
        return [... this._listaPersonajes]
    }
 
    agregarNuevoPersonaje(data: personaje) {
        this._listaPersonajes.push(data);
    }

}