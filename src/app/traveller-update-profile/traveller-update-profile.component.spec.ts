import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerUpdateProfileComponent } from './traveller-update-profile.component';

describe('TravellerUpdateProfileComponent', () => {
  let component: TravellerUpdateProfileComponent;
  let fixture: ComponentFixture<TravellerUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
