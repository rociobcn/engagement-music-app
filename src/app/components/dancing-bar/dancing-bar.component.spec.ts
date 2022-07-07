import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancingBarComponent } from './dancing-bar.component';

describe('DancingBarComponent', () => {
  let component: DancingBarComponent;
  let fixture: ComponentFixture<DancingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancingBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
