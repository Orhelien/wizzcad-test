import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Top menu component

  @Input() userIsLoggedIn = false;
  @Input() isHomePage = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  //Launch log out process
  public logout() {
    this.authService.logOut();
  }

  //Go Home
  public goHome() {
    this.router.navigate(["/"]);
  }


  //Change view mode between grid view and datatable view
  public changeViewMode(event) {
    this.globalService.setViewModeTable(event.checked);
  }
}
