import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public viewModeTable = false;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    //Get and subscribe on each change view mode from menu component
    this.globalService.viewModeChange.subscribe((x) => this.viewModeTable = x);
  }


}
