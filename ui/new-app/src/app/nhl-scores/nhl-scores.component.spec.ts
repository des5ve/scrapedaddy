import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlScoresComponent } from './nhl-scores.component';

describe('NhlScoresComponent', () => {
  let component: NhlScoresComponent;
  let fixture: ComponentFixture<NhlScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhlScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhlScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
