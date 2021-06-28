import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public viewModeChange: Subject<boolean> = new Subject();
  public getviewModeChange = this.viewModeChange.asObservable();

  constructor() { }

  // Edit view mode
  public setViewModeTable(viewModeTable: boolean): void {
    this.viewModeChange.next(viewModeTable);
  }
}
