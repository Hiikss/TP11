import { Component, OnDestroy, OnInit } from '@angular/core';
import { GestionsDatasService } from '../services/gestions-datas.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit, OnDestroy {

  public datasSaisies!: string[];

  constructor(private gestionDatas: GestionsDatasService) { }

  ngOnInit() {
    this.gestionDatas.emetteurDesSaisies.subscribe((value) => this.datasSaisies = value);
  }

  ngOnDestroy(): void {
    this.gestionDatas.emetteurDesSaisies.unsubscribe();
  }
}
