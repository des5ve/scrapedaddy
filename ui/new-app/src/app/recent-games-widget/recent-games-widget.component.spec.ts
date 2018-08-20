import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentGamesWidgetComponent } from './recent-games-widget.component';

describe('RecentGamesWidgetComponent', () => {
  let component: RecentGamesWidgetComponent;
  let fixture: ComponentFixture<RecentGamesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentGamesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentGamesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
