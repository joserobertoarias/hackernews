import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFavesRoutingModule } from './my-faves-routing.module';
import { MyFavesComponent } from './my-faves.component';

import { cardnewModule } from  '../../shared/components/card-news/card-news.module'

@NgModule({
  declarations: [
    MyFavesComponent
  ],
  imports: [
    CommonModule,
    MyFavesRoutingModule,
    cardnewModule
  ]
})
export class MyFavesModule { }
