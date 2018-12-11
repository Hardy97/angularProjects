import { Component } from '@angular/core';

@Component({
    selector: 'app-parques',
    templateUrl: 'parque.component.html'
})
export class ParquesComponent {

    nombre: string;
    metros: number;
    vegetacion: string;
    abierto: boolean;

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }
}
