import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderLibraryComponent } from './reader-library.component';

describe('ReaderLibraryComponent', () => {
  let component: ReaderLibraryComponent;
  let fixture: ComponentFixture<ReaderLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
