import {Component, OnInit} from '@angular/core';
import {Message} from '../class/message';
import {Personne} from '../class/personne';

//Module 06 - TP1
@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {

  public messages: Array<Message> = [];

  constructor() {
  }

  ngOnInit() {
    this.initMessages();
  }

  //Module 06 - TP1 - Création d'une liste de message par défaut
  initMessages() {
    var paul = new Personne('Paul');
    var alain = new Personne('Alain');
    this.messages.push(Message.createMessage(paul, 'message 1 test', new Date('2018-10-22T06:24:00')));
    this.messages.push(Message.createMessage(alain, 'message 2 test', new Date('2019-06-22T12:29:00')));
    this.messages.push(Message.createMessage(paul, 'message 3 test', new Date('2018-09-03T21:11:00')));
  }

  ngOnDestroy(): void {
  }
}
