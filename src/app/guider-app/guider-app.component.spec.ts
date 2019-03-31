import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderAppComponent } from './guider-app.component';

describe('GuiderAppComponent', () => {
  let component: GuiderAppComponent;
  let fixture: ComponentFixture<GuiderAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
