import {EventEmitter, Injectable} from '@angular/core';
import {Information} from '../models/information';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionInformationsService {
  url = 'http://localhost:8080/informations';

  constructor(private httpClient: HttpClient) {
  }

  public chargerInformations(): Observable<Information[]> {
    return this.httpClient.get<Information[]>(this.url);
  }

  public ajouter(information: any): Observable<any> {
    return this.httpClient.post(this.url, information);
  }

  public getInformation(uuid: string): Observable<Information> {
    const sujet: Subject<Information> = new Subject<Information>();
    this.chargerInformations()
      .subscribe(informations => informations.forEach((information) => {if (information.uuid === uuid) {sujet.next(information); }}));
    return sujet;
  }
}




