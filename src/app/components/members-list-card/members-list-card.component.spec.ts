import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListCardComponent } from './members-list-card.component';

describe('MembersListCardComponent', () => {
  let component: MembersListCardComponent;
  let fixture: ComponentFixture<MembersListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
