import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetdocketComponent } from './betdocket.component';

describe('BetdocketComponent', () => {
  let component: BetdocketComponent;
  let fixture: ComponentFixture<BetdocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetdocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetdocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
