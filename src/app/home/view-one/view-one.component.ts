import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services';

@Component({
  selector: 'app-view-one',
  template: `<ngx-json-viewer [json]="data" style="display: block;"></ngx-json-viewer>`
})
export class ViewOneComponent implements OnInit {

  // View one data component
  // Work with route args "id" | ex : http://localhost:4200/#/json;id=DFDB4F26-D2F6-48D9-B9C5-B84BC38A3CC3

  public data = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    // get data from url params
    this.dataService.findOne(this.route.snapshot.paramMap.get('id'))
      .subscribe((x) => {
        this.data = x;
        if (this.data.length == 0) this.router.navigate(['/404']);
      })
  }

}
