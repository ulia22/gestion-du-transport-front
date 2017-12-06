import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    const isLoggedIn = localStorage.getItem('role')
    if (isLoggedIn == "COLLABORATEUR" || isLoggedIn == "ADMINISTRATEUR" || isLoggedIn == "CHAUFFEUR") {
      return true;
    } else {
      this.router.navigate(['/connexion']);
      return false;
    }
  }
}
