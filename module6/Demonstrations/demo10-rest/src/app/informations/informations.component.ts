import {Component, OnDestroy, OnInit} from '@angular/core';
import {Information} from '../models/information';
import {Subscription} from 'rxjs';
import {GestionInformationsService} from '../services/gestion-informations.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  informations!: Information[];

  constructor(private gestionInformations: GestionInformationsService) { }

  ngOnInit() {
    this.gestionInformations.chargerInformations()
                            .subscribe(value => this.informations = value);
  }

}
