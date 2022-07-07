import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './components/dbz/dbz.module';
import { HeroesModule } from './components/heroes/heroes.module';
import { EmpleadosModule } from './components/listar-empleados/empleados.module';
import { StudentsModule } from './components/students/students.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
    EmpleadosModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
