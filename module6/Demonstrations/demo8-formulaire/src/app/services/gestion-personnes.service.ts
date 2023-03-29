import { EventEmitter, Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class GestionPersonnesService {

  private personnes: Personne[] = [];
  public emeteurPersonnes: EventEmitter<Personne[]> = new EventEmitter<Personne[]>();

  constructor() { }

  private notifier() {
    this.emeteurPersonnes.emit(this.personnes.slice());
  }

  public ajouter(p: Personne): boolean {
    if (p && p.nom !== '' && p.prenom !== '') {
      this.personnes.push(p);
      this.notifier();
      return true;
    }
    else {
      return false;
    }
  }

  public charger() {
    this.notifier();
  }
}
