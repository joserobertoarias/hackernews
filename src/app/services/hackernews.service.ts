import { Ioptions } from './../models/Ioptions';
import { LocalStoreService } from './local-store.service';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IhackerNew } from '../models/IhackerNew';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient,private localStoreServie: LocalStoreService) { }


  getNews(query, page): Observable<IhackerNew[]> {
    return this.httpClient.get<IhackerNew[]>(`${this.apiUrl}?query=${query}&page=${page}`).pipe(
      map((data: any) => {        
        return data.hits.map(item => ({
          created_at: item.created_at,
          story_title: item.story_title,
          story_url: item.story_url,
          author: item.author,
          story_id: item.story_id,
          myfave: false
        }))
      })
    )
  }



}
