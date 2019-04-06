import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerSeeProfileComponent } from './traveller-see-profile.component';

describe('TravellerSeeProfileComponent', () => {
  let component: TravellerSeeProfileComponent;
  let fixture: ComponentFixture<TravellerSeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerSeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerSeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
