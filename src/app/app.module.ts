import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
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
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeDesVehiculesComponent,
    ImmatriculationPipe,
    MarquePipe

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,

  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }