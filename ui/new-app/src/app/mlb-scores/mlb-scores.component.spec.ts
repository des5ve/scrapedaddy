import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbScoresComponent } from './mlb-scores.component';

describe('MlbScoresComponent', () => {
  let component: MlbScoresComponent;
  let fixture: ComponentFixture<MlbScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
