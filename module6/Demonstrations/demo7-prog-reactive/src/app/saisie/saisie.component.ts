import { Component } from '@angular/core';
import { GestionsDatasService } from '../services/gestions-datas.service';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent {
  saisie!: string;

  constructor(private gestionsDatas: GestionsDatasService) { }

  onValiderSaisie() {
    this.gestionsDatas.ajouter(this.saisie);
  }
}
