import { Ioptions } from './../../../models/Ioptions';

import { HackernewsService } from './../../../services/hackernews.service';
import { IhackerNew } from './../../../models/IhackerNew';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  options: Ioptions = {
    size: 20,
    page: 0,
    query: "",
    total: 50
  }
  

  lstNews: IhackerNew[] = []

  @Input()
  queryLocalStorage: string

  constructor(private hnService: HackernewsService) { }

  ngOnInit(): void {

  }

  selectQuery(query){

    this.options.query = query;
    this.options.page = 0

    this.hnService.getNews(this.options.query, this.options.page).subscribe((news: IhackerNew[])=> {
      this.lstNews = news;
    })
  }

  goToPage(page){

    this.hnService.getNews(this.options.query, page).subscribe((news: IhackerNew[])=> {
      this.lstNews = news;
    })
  }



}
