import { IhackerNew } from 'src/app/models/IhackerNew';
import { Ioptions } from './../../../models/Ioptions';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent    {

  @Input()
  response: IhackerNew[] 

  @Input()
  options: Ioptions;

  @Output()
  page: EventEmitter<number> = new EventEmitter<number>();

  get numbers(): number[] {

    if (this.options.total <= 7) {
      return [...Array(this.options.total).keys()].map(x => ++x)
    }

    if (this.options.page > 5) {
      if (this.options.page >= this.options.total - 4) {
        return [1, this.options.total - 4, this.options.total - 3, this.options.total - 2, this.options.total - 1, this.options.total]
      } else {
        return [1, this.options.page - 1, this.options.page, this.options.page + 1,  this.options.total]
      }
    }

    return [1, 2, 3, 4, 5, this.options.total]
  }


  next() {
    this.options.page++;
    this.page.emit(this.options.page);
  }

  prev() {
    this.options.page--;
    this.page.emit(this.options.page);
  }

  to(page: number) {
    this.options.page = page;
    this.page.emit(this.options.page);
  }


}
