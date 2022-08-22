import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { FormsModule } from '@angular/forms'


@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [PaginationComponent],
    declarations: [PaginationComponent],
    providers: [],
})

export class PaginationModule { }


