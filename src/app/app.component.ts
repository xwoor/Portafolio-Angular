import { Component } from '@angular/core';
import { InfopaginaService } from './servicios/infopagina.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public infopaginaService: InfopaginaService ){

  }
}
