import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbScoresComponent } from './cfb-scores.component';

describe('CfbComponent', () => {
  let component: CfbScoresComponent;
  let fixture: ComponentFixture<CfbScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfbScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
