import { LocalStoreService } from './../../services/local-store.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-news',
  templateUrl: './selector-news.component.html',
  styleUrls: ['./selector-news.component.css']
})
export class SelectorNewsComponent implements OnInit {

  selectOptions: string[] = ['angular','reactjs','vuejs']

  @Output()
  queryOption: EventEmitter<string> = new EventEmitter<string>();

  optionSelected;

  constructor(private localStorageService: LocalStoreService) { }

  ngOnInit(): void {
    let q = this.localStorageService.getSelectQuery()
    this.optionSelected = q == null ? "" : q
    this.queryOption.emit(q)
  }

  changeSelect(event){
    this.localStorageService.saveSelectQuery(event.target.value)
    this.queryOption.emit(event.target.value);
  }

}
