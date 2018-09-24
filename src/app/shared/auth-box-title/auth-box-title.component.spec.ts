import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBoxTitleComponent } from './auth-box-title.component';

describe('AuthBoxTitleComponent', () => {
  let component: AuthBoxTitleComponent;
  let fixture: ComponentFixture<AuthBoxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBoxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
