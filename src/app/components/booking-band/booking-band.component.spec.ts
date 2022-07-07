import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBandComponent } from './booking-band.component';

describe('BookingBandComponent', () => {
  let component: BookingBandComponent;
  let fixture: ComponentFixture<BookingBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
