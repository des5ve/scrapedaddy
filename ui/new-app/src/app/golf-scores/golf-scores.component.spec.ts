import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfScoresComponent } from './golf-scores.component';

describe('GolfScoresComponent', () => {
  let component: GolfScoresComponent;
  let fixture: ComponentFixture<GolfScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
