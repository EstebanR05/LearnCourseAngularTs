import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { ListarEmpleadosModule } from './listar-empleados/listar-empleados.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
    ListarEmpleadosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
