import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';

const appRoutes: Routes = [
//{ path: 'app', component: AppComponent }, // /page1 affiche le composant A
{ path: 'collaborateur/reservations', component: AppComponent },
{ path: 'collaborateur/annonces', component: ListeAnnonceComponent },
{ path: 'collaborateur/statistiques', component: AppComponent },
{ path: 'admin/vehicules', component: AppComponent },
{ path: 'admin/chauffeurs', component: AppComponent },

{ path: 'chauffeur/occupation', component: AppComponent },
{ path: 'chauffeur/planning', component: AppComponent }//,
//{ path: '**', redirectTo: 'app'} // redirige vers la route page1 par défaut
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeAnnonceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }