import {Component, OnInit} from '@angular/core';
import {Personne} from '../class/personne';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {
//Module06 - TP1 - Compléter pour gérer le formulaire
  public personnes: Array<Personne> = [];

  constructor() {
  }

  ngOnInit() {
    this.initPersonnes();
  }

  //Module06 - TP1 - initialisation de 2 personnes
  initPersonnes(){
    this.personnes.push(new Personne('Paul'));
    this.personnes.push(new Personne('Alain'));
  }
}
