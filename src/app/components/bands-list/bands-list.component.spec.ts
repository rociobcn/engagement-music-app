import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsListComponent } from './bands-list.component';

describe('BandsListComponent', () => {
  let component: BandsListComponent;
  let fixture: ComponentFixture<BandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
