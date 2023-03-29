import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GestionInformationsService} from '../services/gestion-informations.service';
import {Information} from '../models/information';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private router: Router,
              private gestionInformation: GestionInformationsService) { }

  ngOnInit() {
  }

  onValider() {
    this.gestionInformation.ajouter(new Information('Un événement du ' + new Date(),
                                                    new Date().getSeconds() % 2 === 0 ? 'AFP' : 'REUTERS'))
                           .subscribe(
                             (resultat) => this.router.navigate(['/informations'])
                           );
  }
}
