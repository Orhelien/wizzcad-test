import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ServicesModule } from './services/services.module';
import { MenuComponent } from './component/menu/menu.component';
import { ScrollTopComponent } from './component/scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    MenuComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServicesModule
  ],
  exports: [
    MaterialModule,

    MenuComponent,
    ScrollTopComponent
  ]
})
export class SharedModule { }
