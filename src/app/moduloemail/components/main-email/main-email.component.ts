import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
      <div class="card p-5">
          <h1>{{title}}</h1>
          <hr>
          <app-mostrar-email></app-mostrar-email>
          <app-guardar-email></app-guardar-email>
      </div>
  `
})
export class MainEmailComponent implements OnInit {
  title = 'Modulo de email';

  ngOnInit() {
      console.log('Componente principal del modulo cargado');
  }
}
