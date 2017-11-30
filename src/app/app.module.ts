import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HttpClientModule} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
=======
<<<<<<< HEAD
>>>>>>> reserver-un-vehiclues-de-societe

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
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
=======
import {ListeDesVehiculesComponent} from "./liste-des-vehicules/liste-des-vehicules.component";
import { ListeDesReservationsVehiculesComponent } from './liste-des-reservations-vehicules/liste-des-reservations-vehicules.component';
import { ReserverUnVehiculesDeSocieteComponent } from './reserver-un-vehicules-de-societe/reserver-un-vehicules-de-societe.component';
import { VehiculeService } from './shared/service/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
{ path: 'app', component: ReserverUnVehiculesDeSocieteComponent }, // /page1 affiche le composant A
{ path: '**', redirectTo: 'app'}, // redirige vers la route page1 par défaut
//{path:'collaborateur.',component:ListeDesReservationsVehiculesComponent}
=======
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeDesVehiculesComponent} from './liste-des-vehicules/liste-des-vehicules.component'
import { VehiculeService } from './shared/service/vehicule.service';
import { ImmatriculationPipe } from './shared/pipe/immatriculation.pipe';
import { MarquePipe } from './shared/pipe/marque.pipe';

const appRoutes: Routes = [
{ path: 'app', component: AppComponent }, // /page1 affiche le composant A
//{ path: 'admin/vehicules', component : ListeDesVehiculesComponent},
{ path: '**', redirectTo: 'app'} // redirige vers la route page1 par défaut
>>>>>>> Gerer_les_véhicules
>>>>>>> reserver-un-vehiclues-de-societe
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
<<<<<<< HEAD
    ListeAnnonceComponent,
    ConnexionComponent,
    ListeDesVehiculesComponent,
    CreeAnnonceComponent
=======
    ListeDesVehiculesComponent,
<<<<<<< HEAD
    ListeDesReservationsVehiculesComponent,
    ReserverUnVehiculesDeSocieteComponent,
=======
    ImmatriculationPipe,
    MarquePipe

>>>>>>> Gerer_les_véhicules
>>>>>>> reserver-un-vehiclues-de-societe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
<<<<<<< HEAD
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConnexionService, UserRolesService, AnnonceCovoiturageService],
=======
<<<<<<< HEAD
    HttpClientModule,
    BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule,
=======
    BrowserModule,
    HttpClientModule,

>>>>>>> Gerer_les_véhicules
  ],
  providers: [VehiculeService],
>>>>>>> reserver-un-vehiclues-de-societe
  bootstrap: [AppComponent]
})
export class AppModule { }
