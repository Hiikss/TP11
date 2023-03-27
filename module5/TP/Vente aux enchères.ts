module BO {
    export interface Vendable {
        meilleureEnchere: number
        acheteur?: Acheteur
        encherir(nouvelleEnchere: number, acheteur: Acheteur): void
    }

    export class Acheteur {
        constructor(public nom: string, public prenom: string) { }
    }

    export class Oeuvre implements Vendable, Affichable {
        meilleureEnchere: number
        acheteur?: Acheteur

        constructor(public annee: number, public titre: string, public auteurs: Auteur[]) { }

        encherir(nouvelleEnchere: number, acheteur: Acheteur) {
            this.meilleureEnchere = nouvelleEnchere
            this.acheteur = acheteur
        }

        afficher(): string {
            return ""
        }
    }

    export interface Affichable {
        afficher(): string
    }

    export class Auteur implements Affichable {
        constructor(public nom: string, public prenom: string) { }

        afficher() {
            return ""
        }
    }

    export class Sculpture extends Oeuvre {
        constructor(annee: number, titre: string, auteurs: Auteur[], public matiere: string) {
            super(annee, titre, auteurs)
        }
    }

    export class Livre extends Oeuvre {
        constructor(annee: number, titre: string, auteurs: Auteur[]) {
            super(annee, titre, auteurs)
        }
    }

    export class Peinture extends Oeuvre {
        constructor(annee: number, titre: string, auteurs: Auteur[]) {
            super(annee, titre, auteurs)
        }
    }
}