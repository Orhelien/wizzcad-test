import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../shared/animations';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  animations: [fadeInAnimation.animation]
})
export class DataComponent implements OnInit {

  public state: string = 'inactive';

  @Input() set data(_data: any) {
    this._data = _data;
    setTimeout(() => this.state = 'show', 200);
  }
  @Input() index: number;

  public _data: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public showOne(_id) {
    this.router.navigate(['json', { id: _id }]);
  }
}
