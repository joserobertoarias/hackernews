import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNewsComponent } from './selector-news.component';

describe('SelectorNewsComponent', () => {
  let component: SelectorNewsComponent;
  let fixture: ComponentFixture<SelectorNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
