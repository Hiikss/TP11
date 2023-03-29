import { EventEmitter, Injectable } from '@angular/core';
import { Information } from '../models/information';

@Injectable({
  providedIn: 'root'
})
export class GestionInformationsService {
  private informations: Information[] = [];
  public emetteurInformations: EventEmitter<Information[]>;

  constructor() {
    let information = new Information('premier événement', 'AFP');
    information.uuid = '1';
    this.informations.push(information);
    information = new Information('second événement', 'AFP');
    information.uuid = '2';
    this.informations.push(information);

    this.emetteurInformations = new EventEmitter<Information[]>();
  }

  public notifier() {
    this.emetteurInformations.emit(this.informations.slice());
  }

  public chargerInformations() {
    this.notifier();
  }

  public getInformation(uuid: string) {
    return this.informations.find((value) => value.uuid === uuid);
  }
}
