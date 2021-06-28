import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/services';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public paginator: Paginator = new Paginator();

  constructor(
    private dataService: DataService
  ) {
    //Load first result
    this.dataService.getDataByPage(this.paginator)
      .subscribe((x) => this.paginator = x)
  }

  ngOnInit(): void { }

  // On scroll load next result
  public onScroll(): void {
    ++this.paginator.pageIndex;
    this.dataService
      .getDataByPage(this.paginator)
      .subscribe((_data) => this.paginator = _data);
  }


  /**
   * Search filter
   * @param event 
   */
  public search(event: Event): void {
    //Reset results and page index on each change 
    this.paginator = new Paginator();

    //Get input value
    this.paginator.search.value = (event.target as HTMLInputElement).value;

    //Apply filter if input not empty
    this.paginator.search.active = this.paginator.search.value.length > 0;

    this.paginator.search.colName = 'name';

    this.dataService.getDataByPage(this.paginator)
      .subscribe((x) => this.paginator = x)

  }

  /**
   * Sort result by name
   * @param event component event
   * @param _colName sort field name
   */
  public sortResult(event, _colName: string): void {
    //Reset results and page index on each change 
    this.paginator = new Paginator();

    //Apply sorting by checkbox state
    this.paginator.sort.active = event.checked;

    //Set field name to sort
    this.paginator.sort.colName = _colName;

    //Get new result
    this.dataService.getDataByPage(this.paginator)
      .subscribe((x) => this.paginator = x);
  }

}
