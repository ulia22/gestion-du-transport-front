import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
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
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeDesVehiculesComponent,
<<<<<<< HEAD
    ListeDesReservationsVehiculesComponent,
    ReserverUnVehiculesDeSocieteComponent,
=======
    ImmatriculationPipe,
    MarquePipe

>>>>>>> Gerer_les_véhicules
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
<<<<<<< HEAD
    HttpClientModule,
    BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule,
=======
    BrowserModule,
    HttpClientModule,

>>>>>>> Gerer_les_véhicules
  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }