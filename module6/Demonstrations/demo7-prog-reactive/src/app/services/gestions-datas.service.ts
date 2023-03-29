import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionsDatasService {

  private toutesLesSaisies: string[];
  public emetteurDesSaisies: EventEmitter<string[]>;
  
  constructor() {
    this.toutesLesSaisies = [];
    this.emetteurDesSaisies = new EventEmitter<string[]>();
  }

  private notifier() {
    this.emetteurDesSaisies.emit(this.toutesLesSaisies.slice());
  }

  public ajouter(saisie: string) {
    if (saisie) {
      saisie = '_' + saisie.toUpperCase() + '_';
      this.toutesLesSaisies.push(saisie);
      this.notifier();
    }
  }
}
