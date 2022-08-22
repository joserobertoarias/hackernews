import { LocalStoreService } from './../../../services/local-store.service';
import { IhackerNew } from '../../../models/IhackerNew';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit, OnChanges {

  @Input()
  item: IhackerNew

  constructor(private localStorageServie: LocalStoreService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.item.myfave = this.localStorageServie.isInMyFavorites(this.item);
    
  }

  ngOnInit(): void {

  }

  goToUrl(url) {
    window.open(url, "_blank");
  }

  save(item: IhackerNew) {
    if (item.myfave == false){
      item.myfave = true;      
      this.localStorageServie.addMyFavorite(item);    
    }else{
      item.myfave = false;
      this.localStorageServie.deleteFavorite(item);
    }

  }
}
