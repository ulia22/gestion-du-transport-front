import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
{ path: 'app', component: AppComponent }, // /page1 affiche le composant A
{ path: '**', redirectTo: 'app'} // redirige vers la route page1 par défaut
];
=======
import { ListeDesVehiculesComponent } from './liste-des-vehicules/liste-des-vehicules.component';
>>>>>>> Gerer_les_véhicules


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent
=======
    ListeDesVehiculesComponent
>>>>>>> Gerer_les_véhicules
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
