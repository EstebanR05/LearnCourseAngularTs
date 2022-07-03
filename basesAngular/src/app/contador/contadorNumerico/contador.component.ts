import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorNumericoComponent {
    public title: String = 'Contador App';
    /* public numero: number = 10; */
    public base: number = 5;

    acumularSuma() {
        this.base += 5;
    }

    acumularResta() {
        this.base -= 5;
    }
} 