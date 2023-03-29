import { Component, OnInit } from '@angular/core';
import {Information} from '../models/information';
import {ActivatedRoute} from '@angular/router';
import {GestionInformationsService} from '../services/gestion-informations.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  information!: Information;
  constructor(
        private route: ActivatedRoute,
        private gestionInformations: GestionInformationsService
  ) { }

  ngOnInit() {
    this.gestionInformations.getInformation(this.route.snapshot.paramMap.get('id')!)
                            .subscribe(value => this.information = value);
  }

}
