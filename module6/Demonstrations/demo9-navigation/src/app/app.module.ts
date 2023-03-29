import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InformationsComponent } from './informations/informations.component';
import { InconnuComponent } from './inconnu/inconnu.component';
import { DetailComponent } from './detail/detail.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'informations', component: InformationsComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: InconnuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    FormulaireComponent,
    InformationsComponent,
    InconnuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
