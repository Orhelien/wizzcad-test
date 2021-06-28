import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../model';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Authentification servcie

  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  //Get token in local storage
  public getToken(): string {
    return localStorage.getItem('token');
  }

  // Set Token in local web browser storage
  public setToken(_token: string): void {
    localStorage.setItem('token', _token);
  }

  // Check if var auth is set
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null && token != '';
  }

  // Go log in page
  public goLogin() {
    this.route.navigate(['/login']);
  }

  //Log out process
  public logOut() {
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  //Get all available users
  public getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/logins`).pipe(retry(3));
  }
}
