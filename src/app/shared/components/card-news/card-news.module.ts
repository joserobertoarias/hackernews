import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardNewsComponent } from './card-news.component';

@NgModule({
  declarations: [
    CardNewsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardNewsComponent
  ]
})
export class cardnewModule { }
