import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  template: `
      <div *ngIf="emailContacto">
          <h4>{{title}}</h4>
          <strong>Email de contacto:</strong> {{emailContacto}}
          <button (click)="borrarEmail()">Eliminar email de contacto</button>
      </div>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {

  // title = 'Curso de Angular 7 Avanzado: MEAN, JWT, Moodulos, Animaciones';
  title = 'Mostrar Email';
  emailContacto: string;

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
}
