import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandGeneralComponent } from './band-general.component';

describe('BandGeneralComponent', () => {
  let component: BandGeneralComponent;
  let fixture: ComponentFixture<BandGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
