import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCtaComponent } from './signup-cta.component';

describe('SignupCtaComponent', () => {
  let component: SignupCtaComponent;
  let fixture: ComponentFixture<SignupCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
