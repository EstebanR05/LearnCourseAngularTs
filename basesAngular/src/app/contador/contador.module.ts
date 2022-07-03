import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorNumericoComponent } from "./contadorNumerico/contador.component";

@NgModule({
    declarations: [
        ContadorNumericoComponent
    ],
    exports: [
        ContadorNumericoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule { }