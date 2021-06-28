import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public userIsLoggedIn: boolean;
  public isHomePage: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Refresh login state on each navigation    
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.isHomePage = this.router.url == "/";
        this.userIsLoggedIn = this.authService.isAuthenticated();
        if (!this.userIsLoggedIn) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  ngOnInit(): void { }

  // Launch log out process
  public logout() {
    this.authService.logOut();
  }

}