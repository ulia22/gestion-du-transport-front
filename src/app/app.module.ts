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
import { ConnexionService } from './shared/service/connexion.service'
import { UserRolesService } from './shared/service/user-roles.service'
import { ListeDesVehiculesComponent } from './liste-des-vehicules/liste-des-vehicules.component';
import { ListeDesReservationsComponent } from './liste-des-reservations/liste-des-reservations.component'
import { ReservationService } from './shared/service/reservation.service';
import { JsontoDatePipe } from './shared/pipe/jsonto-date.pipe'

const appRoutes: Routes = [
//Application
{ path: 'app', component: AppComponent },
{ path: 'collaborateur/reservations', component: ListeDesReservationsComponent },
{ path: 'collaborateur/annonces', component: ListeAnnonceComponent },
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
    ListeDesReservationsComponent,
    JsontoDatePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConnexionService, UserRolesService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
