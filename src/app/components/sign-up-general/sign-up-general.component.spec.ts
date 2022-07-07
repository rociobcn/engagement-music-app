import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGeneralComponent } from './sign-up-general.component';

describe('SignUpGeneralComponent', () => {
  let component: SignUpGeneralComponent;
  let fixture: ComponentFixture<SignUpGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
