import { Component, OnDestroy, OnInit } from '@angular/core';
import { Information } from '../models/information';
import { Subscription } from 'rxjs';
import { GestionInformationsService } from '../services/gestion-informations.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit, OnDestroy {
  informations!: Information[];
  private subscriptionInformations!: Subscription;

  constructor(private gestionInformations: GestionInformationsService) { }

  ngOnInit() {
    this.subscriptionInformations =
      this.gestionInformations.emetteurInformations.subscribe(
        (value) => this.informations = value
      );
    this.gestionInformations.chargerInformations();
  }

  ngOnDestroy(): void {
    this.subscriptionInformations.unsubscribe();
  }

}
