import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-parques',
    templateUrl: 'parque.component.html'
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

    // Input es para pasar datos desde el padre hacia el hijo
    // Se le puede dar un alias a los Input mientras que cuando le vayas a bindear el valor desde
    // el padre pongas el alias y no el nombre de la variable
    @Input() nombre: string;
    metros: number;
    vegetacion: string;
    abierto: boolean;

    // Output permite pasar datos desde el hijo hacia el padre
    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }

    // Hooks ( Start )

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes);
        console.log('Existen cambios en las propiedades');
    }

    ngOnInit() {
        console.log('Metodo on Init lanzado');
    }

    ngDoCheck() {
        console.log('DoCheck');
    }

    ngOnDestroy() {
        console.log('OnDestroy: se elimino un componente');
    }

    // Hooks ( End )

    emitirEvento() {
        // Cargamos un objeto para enviarselo al padre
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }
}
