import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour tout le monde';
  valeurInput = 'une valeur venant du composant';
  zoneSaisie: any =  'Saisissez votre nom';

  onClickBouton() {
    console.log('Clic sur le bouton');
  }
}
