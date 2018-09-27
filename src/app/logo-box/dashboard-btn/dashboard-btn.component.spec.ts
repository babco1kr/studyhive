import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBtnComponent } from './dashboard-btn.component';

describe('DashboardBtnComponent', () => {
  let component: DashboardBtnComponent;
  let fixture: ComponentFixture<DashboardBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
