import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderNotifiactionDetailsComponent } from './guider-notifiaction-details.component';

describe('GuiderNotifiactionDetailsComponent', () => {
  let component: GuiderNotifiactionDetailsComponent;
  let fixture: ComponentFixture<GuiderNotifiactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderNotifiactionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderNotifiactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
