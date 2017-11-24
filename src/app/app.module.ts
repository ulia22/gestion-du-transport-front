import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
{ path: 'app', component: AppComponent }, // /page1 affiche le composant A
{ path: '**', redirectTo: 'app'} // redirige vers la route page1 par défaut
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
