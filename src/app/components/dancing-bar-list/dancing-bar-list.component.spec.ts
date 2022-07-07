import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancingBarListComponent } from './dancing-bar-list.component';

describe('DancingBarListComponent', () => {
  let component: DancingBarListComponent;
  let fixture: ComponentFixture<DancingBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancingBarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancingBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
