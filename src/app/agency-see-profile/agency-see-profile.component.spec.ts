import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySeeProfileComponent } from './agency-see-profile.component';

describe('AgencySeeProfileComponent', () => {
  let component: AgencySeeProfileComponent;
  let fixture: ComponentFixture<AgencySeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
