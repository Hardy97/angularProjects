import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html'
})
export class KeepersComponent implements OnInit {
  title = 'Cuidadores';

  ngOnInit() {
      console.log('keepers.component cargado !!');
  }
}
