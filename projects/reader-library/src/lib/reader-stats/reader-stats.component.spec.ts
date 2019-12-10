import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderStatsComponent } from './reader-stats.component';

describe('ReaderStatsComponent', () => {
  let component: ReaderStatsComponent;
  let fixture: ComponentFixture<ReaderStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
