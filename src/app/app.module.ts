import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {ListeDesVehiculesComponent} from "./liste-des-vehicules/liste-des-vehicules.component";
import { ListeDesReservationsVehiculesComponent } from './liste-des-reservations-vehicules/liste-des-reservations-vehicules.component';

const appRoutes: Routes = [
{ path: 'app', component: ListeDesReservationsVehiculesComponent }, // /page1 affiche le composant A
{ path: '**', redirectTo: 'app'}, // redirige vers la route page1 par défaut
//{path:'collaborateur.',component:ListeDesReservationsVehiculesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeDesVehiculesComponent,
    ListeDesReservationsVehiculesComponent,
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