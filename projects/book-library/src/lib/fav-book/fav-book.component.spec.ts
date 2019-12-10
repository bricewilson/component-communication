import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBookComponent } from './fav-book.component';

describe('FavBookComponent', () => {
  let component: FavBookComponent;
  let fixture: ComponentFixture<FavBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
