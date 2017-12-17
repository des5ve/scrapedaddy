import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflScoresComponent } from './nfl-scores.component';

describe('NflScoresComponent', () => {
  let component: NflScoresComponent;
  let fixture: ComponentFixture<NflScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
