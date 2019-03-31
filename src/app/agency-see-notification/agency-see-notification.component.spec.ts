import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySeeNotificationComponent } from './agency-see-notification.component';

describe('AgencySeeNotificationComponent', () => {
  let component: AgencySeeNotificationComponent;
  let fixture: ComponentFixture<AgencySeeNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySeeNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySeeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
