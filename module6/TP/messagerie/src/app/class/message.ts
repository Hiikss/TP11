import {Personne} from './personne';
//Module06 - TP1 - Création BO
export class Message {
    personne: Personne;
    message: string;
    date: Date;

    //Module06 - TP1 - rendre optionnel les paramètres du constructeur afin de l'appeler sans paramètre
    constructor(personne: Personne, message: string = '') {
       this.personne = personne;
       this.message = message;
       this.date = new Date();
    }

    public static createMessage(personne: Personne, message: string, dateMessage: Date): Message {
        const m: Message = new Message(personne, message);
        m.date = dateMessage;
        return  m;
    }

}
