import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Information } from '../models/information';
import { GestionInformationsService } from '../services/gestion-informations.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  information!: Information;

  constructor(private route: ActivatedRoute, private gestionInformation: GestionInformationsService) { }

  ngOnInit(): void {
    this.information = this.gestionInformation.getInformation(this.route.snapshot.paramMap.get('id')!)!;
  }

}
