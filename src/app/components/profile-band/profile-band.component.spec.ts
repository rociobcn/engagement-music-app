import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBandComponent } from './profile-band.component';

describe('ProfileBandComponent', () => {
  let component: ProfileBandComponent;
  let fixture: ComponentFixture<ProfileBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
