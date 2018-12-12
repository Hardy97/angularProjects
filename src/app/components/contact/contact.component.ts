import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string;

  ngOnInit() {
      console.log('contact.component cargado !!');
  }

  guardarEmail() {
    // localStorage es como guardar algo en una variable de session
    localStorage.setItem('emailContacto', this.emailContacto);
    // console.log(this.emailContacto);
  }
}
