import { FormsModule } from '@angular/forms';
import { SelectorNewsComponent } from './../selector-news/selector-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsRoutingModule } from './all-news-routing.module';
import { cardnewModule } from "../../shared/components/card-news/card-news.module";
import { AllNewsComponent } from './components/all-news.component';
import { PaginationModule } from './../../shared/components/pagination/pagination.module'

@NgModule({
  declarations: [
    AllNewsComponent,
    SelectorNewsComponent
  ],
  imports: [
    CommonModule,
    AllNewsRoutingModule,
    cardnewModule,
    FormsModule,
    PaginationModule
  ]
})
export class AllNewsModule { }
