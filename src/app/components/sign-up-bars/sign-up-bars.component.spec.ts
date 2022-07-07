import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBarsComponent } from './sign-up-bars.component';

describe('SignUpBarsComponent', () => {
  let component: SignUpBarsComponent;
  let fixture: ComponentFixture<SignUpBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
