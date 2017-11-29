import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from './shared/service/connexion.service';
import { UserRolesService } from './shared/service/user-roles.service';
import { AnnonceCovoiturageService } from './shared/service/annonce-covoiturage.service';
import { ListeDesVehiculesComponent } from './liste-des-vehicules/liste-des-vehicules.component';
import { CreeAnnonceComponent } from './cree-annonce/cree-annonce.component';

const appRoutes: Routes = [
//Application
{ path: 'app', component: AppComponent },
{ path: 'collaborateur/reservations', component: AppComponent },
{ path: 'collaborateur/annonces', component: ListeAnnonceComponent },
{ path: 'collaborateur/annonces/creer', component: CreeAnnonceComponent},
{ path: 'collaborateur/statistiques', component: AppComponent },
{ path: 'admin/vehicules', component: ListeDesVehiculesComponent },
{ path: 'admin/chauffeurs', component: AppComponent },
{ path: 'chauffeur/occupation', component: AppComponent },
{ path: 'chauffeur/planning', component: AppComponent },
//Connexion
{ path: 'connexion', component: ConnexionComponent },

//Default
{ path: '**', redirectTo: 'app'} // redirige vers la route app par défaut
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeAnnonceComponent,
    ConnexionComponent,
    ListeDesVehiculesComponent,
    CreeAnnonceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConnexionService, UserRolesService, AnnonceCovoiturageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
