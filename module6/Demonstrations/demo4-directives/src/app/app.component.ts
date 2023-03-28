import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo4-directives';
  informations: string[] = [
    'La France est en quart de final de la coupe du monde de hockey sur gazon',
    'Le PSG est qualifié pour les 1/8 de finale de la Champions League',
    'Cette année, Noël est le 25 décembre'
  ];
  classesAAppliquer = {
    'rouge': this.informations.length <= 2,
    'vert': this.informations.length > 2
  };
}
