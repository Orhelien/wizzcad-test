import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';
import { DataComponent } from './data/data.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TableComponent } from './table/table.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    DataComponent,
    ViewOneComponent,
    TableComponent,
    GridComponent
  ],
  imports: [
    CommonModule,

    //Local project module
    SharedModule,

    // NPM Modules
    InfiniteScrollModule,
    NgxJsonViewerModule
  ]
})
export class HomeModule { }
