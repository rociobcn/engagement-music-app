import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBandCardComponent } from './booking-band-card.component';

describe('BookingBandCardComponent', () => {
  let component: BookingBandCardComponent;
  let fixture: ComponentFixture<BookingBandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingBandCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
