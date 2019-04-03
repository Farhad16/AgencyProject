import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderSeeProfileComponent } from './guider-see-profile.component';

describe('GuiderSeeProfileComponent', () => {
  let component: GuiderSeeProfileComponent;
  let fixture: ComponentFixture<GuiderSeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderSeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderSeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
