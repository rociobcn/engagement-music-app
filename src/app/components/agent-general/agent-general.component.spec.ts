import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGeneralComponent } from './agent-general.component';

describe('AgentGeneralComponent', () => {
  let component: AgentGeneralComponent;
  let fixture: ComponentFixture<AgentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
