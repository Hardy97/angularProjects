import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Curso de Angular 7 Avanzado: MEAN, JWT, Moodulos, Animaciones';
  emailContacto;

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
    console.log(this.emailContacto);
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
