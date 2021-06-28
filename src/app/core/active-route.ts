import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class ActiveRouteLogged implements CanActivate {

  // Page access controller

  constructor(
    private authService: AuthService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let isAuthenticated: boolean = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      console.log('no session, redirect to login');
      this.authService.goLogin();
    }
    return isAuthenticated;
  }
}
