import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderCreateProfileComponent } from './guider-create-profile.component';

describe('GuiderCreateProfileComponent', () => {
  let component: GuiderCreateProfileComponent;
  let fixture: ComponentFixture<GuiderCreateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderCreateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
