import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewsComponent } from './news-views.component';

describe('NewsViewsComponent', () => {
  let component: NewsViewsComponent;
  let fixture: ComponentFixture<NewsViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
