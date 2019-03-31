import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderCheckNotificationComponent } from './guider-check-notification.component';

describe('GuiderCheckNotificationComponent', () => {
  let component: GuiderCheckNotificationComponent;
  let fixture: ComponentFixture<GuiderCheckNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderCheckNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderCheckNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
