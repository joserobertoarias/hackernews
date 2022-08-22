import { LocalStoreService } from './../../services/local-store.service';
import { Component, OnInit } from '@angular/core';
import { IhackerNew } from 'src/app/models/IhackerNew';

@Component({
  selector: 'app-my-faves',
  templateUrl: './my-faves.component.html',
  styleUrls: ['./my-faves.component.css']
})
export class MyFavesComponent implements OnInit {

  lstNews: IhackerNew[] = []

  constructor(private localStoreServie: LocalStoreService) { }

  ngOnInit(): void {


    this.lstNews = this.localStoreServie.getMyFavorits();

  }

}
