import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  template: `
      <h4>{{title}}</h4>
      <input type="text" [(ngModel)]="emailContacto"/>
      <button (click)="guardarEmail()">Guardar email </button>
  `
})
export class GuardarEmailComponent {

  title = 'Guardar Email';
  emailContacto: string;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}
