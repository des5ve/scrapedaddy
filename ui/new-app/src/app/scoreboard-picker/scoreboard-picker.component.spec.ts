import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardPickerComponent } from './scoreboard-picker.component';

describe('ScoreboardPickerComponent', () => {
  let component: ScoreboardPickerComponent;
  let fixture: ComponentFixture<ScoreboardPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
