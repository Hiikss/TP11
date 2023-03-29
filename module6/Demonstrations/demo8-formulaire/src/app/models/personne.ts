export class Personne {
    constructor(public nom: string, public prenom: string) { }

    toString(): string {
        return this.nom + ' ' + this.prenom;
    }
}
