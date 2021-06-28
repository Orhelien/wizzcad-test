import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Component to choose user to connect

  public userList: User[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // On page load, show avalaible users
    this.authService.getUsersList().subscribe((x) => this.userList = x);
  }

  /**
   * Connect with choosed user
   * @param _user choosed user
   */
  public connect(_user: User): void {
    this.authService.setToken(_user.token);
    this.router.navigate(['']);
  }
}
