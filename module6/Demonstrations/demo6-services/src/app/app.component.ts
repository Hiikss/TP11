import { Component } from '@angular/core';
import { ReglesMetiersService } from './services/regles-metiers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo6-services';
  nombres: number[] = [1, 3, 4, 8, 15, 16];

  constructor(private reglesMetiersServices: ReglesMetiersService) { }

  getClasses(nombre: number) {
    const estPaire = this.reglesMetiersServices.estPaire(nombre);
    return { 'vert': estPaire, 'rouge': !estPaire };
  }
}
