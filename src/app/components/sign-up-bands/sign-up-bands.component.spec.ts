import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBandsComponent } from './sign-up-bands.component';

describe('SignUpBandsComponent', () => {
  let component: SignUpBandsComponent;
  let fixture: ComponentFixture<SignUpBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpBandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
