import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from './shared/service/connexion.service'
import { UserRolesService } from './shared/service/user-roles.service'
import { ListeDesVehiculesComponent } from './liste-des-vehicules/liste-des-vehicules.component';
import { ListeDesReservationsComponent } from './liste-des-reservations/liste-des-reservations.component'
import { ReservationService } from './shared/service/reservation.service';
import { JsontoDatePipe } from './shared/pipe/jsonto-date.pipe';
import { AnnonceCovoiturageService } from './shared/service//annonce-covoiturage.service'
import { CreeAnnonceComponent } from './cree-annonce/cree-annonce.component'
import { ListeDesReservationsVehiculesComponent } from './liste-des-reservations-vehicules/liste-des-reservations-vehicules.component';
import { ReserverUnVehiculesDeSocieteComponent } from './reserver-un-vehicules-de-societe/reserver-un-vehicules-de-societe.component';
import { VehiculeService } from './shared/service/vehicule.service';
import { ImmatriculationPipe } from './shared/pipe/immatriculation.pipe';
import { MarquePipe } from './shared/pipe/marque.pipe';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { GoogleMapService } from './shared/service/google-map.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
//Application
{ path: 'menu', component: MenuComponent },
{ path: 'collaborateur/reservations', component: ListeDesReservationsComponent },
{ path: 'collaborateur/annonces', component: ListeAnnonceComponent },
{ path: 'collaborateur/annonces/creer', component: CreeAnnonceComponent},
{ path: 'collaborateur/statistiques', component: AppComponent },
{ path: 'admin/vehicules', component: ListeDesVehiculesComponent },
{ path: 'admin/chauffeurs', component: AppComponent },
{ path: 'chauffeur/occupation', component: AppComponent },
{ path: 'chauffeur/planning', component: AppComponent },
{ path: 'collaborateur/reservations/creer', component: ReserverUnVehiculesDeSocieteComponent},
{ path: 'test', component: ListeDesReservationsVehiculesComponent},
//Connexion
{ path: 'connexion', component: ConnexionComponent },

//Default
{ path: '**', component: PageNotFoundComponent} // redirige vers PageNotFound par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    ListeDesVehiculesComponent,
    MenuComponent,
    ListeAnnonceComponent,
    ConnexionComponent,
    ListeDesVehiculesComponent,
    ListeDesReservationsComponent,
    JsontoDatePipe,
    CreeAnnonceComponent,
    ListeDesReservationsVehiculesComponent,
    ReserverUnVehiculesDeSocieteComponent,
    ListeDesVehiculesComponent,
    ImmatriculationPipe,
    MarquePipe,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NguiAutoCompleteModule
  ],
  providers: [ConnexionService, UserRolesService, ReservationService, AnnonceCovoiturageService,VehiculeService, GoogleMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
