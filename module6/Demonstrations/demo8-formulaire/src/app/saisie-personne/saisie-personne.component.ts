import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../models/personne';
import { GestionPersonnesService } from '../services/gestion-personnes.service';

@Component({
  selector: 'app-saisie-personne',
  templateUrl: './saisie-personne.component.html',
  styleUrls: ['./saisie-personne.component.css']
})
export class SaisiePersonneComponent {
  angularForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private gestionPeronnes: GestionPersonnesService) {
    this.creerFormulaire();
  }

  private creerFormulaire() {
    this.angularForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  private champInvalide(champ: string) {
    return this.angularForm.controls[champ].invalid &&
      (this.angularForm.controls[champ].dirty || this.angularForm.controls[champ].touched);
  }
  
  onEnregistrer() {
    if (!this.problemeValidation()) {
      this.gestionPeronnes.ajouter(new Personne(this.angularForm.controls['nom'].value, this.angularForm.controls['prenom'].value));
      this.angularForm.reset();
    }
  }

  problemeValidation() {
    return this.angularForm.pristine || this.angularForm.invalid;
  }

  prenomInvalide() {
    return this.champInvalide('prenom');
  }

  nomInvalide() {
    return this.champInvalide('nom');
  }

}
