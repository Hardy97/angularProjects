import { Component } from '@angular/core';

@Component({
    selector: 'app-tienda',
    templateUrl: 'tienda.component.html',
    styleUrls: ['tienda.component.css']
})
export class TiendaComponent {
    titulo: string;
    nombreDelParque: string;
    miParque;

    constructor() {
        this.titulo = 'Esta es la tienda';
    }

    mostrarNombre() {
        // console.log(this.nombreDelParque);
    }

    verDatosParque( event ) {
        console.log(event);
        this.miParque = event;
    }
}
