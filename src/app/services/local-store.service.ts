import { IhackerNew } from 'src/app/models/IhackerNew';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private myList: IhackerNew[] = [];
  
  constructor() { }


  saveSelectQuery(query: string){
    localStorage.removeItem("HackerNewsSelectQuery")
    localStorage.setItem("HackerNewsSelectQuery",query);
  }

  getSelectQuery(): string {
    return localStorage.getItem("HackerNewsSelectQuery")
  }

  addMyFavorite(hackerNewItem: IhackerNew): void{
    this.myList = JSON.parse(localStorage.getItem("HackerNewsmyList")!) || [];
  
    if (this.myList != null){
      if (!(this.myList!.find(item => item.story_id === hackerNewItem.story_id))) {
        this.myList.push(hackerNewItem);
        localStorage.removeItem("HackerNewsmyList");
        localStorage.setItem("HackerNewsmyList",JSON.stringify(this.myList));
      }
    }
  }

  deleteFavorite(hackerNewItem: IhackerNew):void{   
    this.myList = JSON.parse(localStorage.getItem("HackerNewsmyList")!) || [];

    if (this.myList != null){
      let index = this.myList.findIndex(item => item.story_id === hackerNewItem.story_id);
      if(index != -1) {      
        this.myList.splice(index, 1);
        localStorage.removeItem("HackerNewsmyList");
        localStorage.setItem("HackerNewsmyList",JSON.stringify(this.myList));
      }
    }
  }

  getMyFavorits(): IhackerNew[] {
    this.myList = JSON.parse(localStorage.getItem("HackerNewsmyList")!) || [];
    return this.myList;
   }

   isInMyFavorites(hackerNewItem: IhackerNew): boolean {

    let found = false;
    if (!(localStorage.getItem("HackerNewsmyList") === null)) {
      this.myList = JSON.parse(localStorage.getItem("HackerNewsmyList")!) || [];

      if (this.myList != null && hackerNewItem != undefined){
        let index = this.myList.findIndex(item => item.story_id === hackerNewItem.story_id);
        if (index != -1){
          found = true;
        }
      }
  
    }
    return found;

   }


}
