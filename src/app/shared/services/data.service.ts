import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Paginator } from '../model';
import { AuthService } from './';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Data service

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  //Get data by paginator
  public getDataByPage(paginator: Paginator): Observable<Paginator> {
    // Get session token
    const _token = this.authService.getToken();

    //Get sort, active => apply sort
    const sort = paginator.sort.active ? '&_sort=' + paginator.sort.colName : '';

    //Get sort, active => apply sort
    const search = paginator.search.active ? '&' + paginator.search.colName + '_like=' + paginator.search.value : '';

    //Url params from paginator data
    const payload =
      '_page=' + paginator.pageIndex +
      '&_limit=' + paginator.resultPerPage
      + sort + search;

    return this.http.get<any>(`${API_URL}/${_token}?${payload}`)
      .pipe(
        retry(3),
        map((x) => {
          paginator.items.push(...x);
          return paginator;
        })
      );
  }

  //Get one by id
  public findOne(id: string): Observable<any> {
    let _token = this.authService.getToken();
    return this.http.get<any>(`${API_URL}/${_token}?id=${id}`).pipe(retry(3));
  }

  //Get all result not empty 
  public findAll(): Observable<any> {
    let _token = this.authService.getToken();
    return this.http.get<any>(`${API_URL}/${_token}`).pipe(
      retry(3),
      map((x) => { return x.filter((x) => x.version != undefined) })
    );
  }

}