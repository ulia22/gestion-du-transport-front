import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListeDesVehiculesComponent } from './liste-des-vehicules/liste-des-vehicules.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeDesVehiculesComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
