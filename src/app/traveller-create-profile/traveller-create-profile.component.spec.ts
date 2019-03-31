import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerCreateProfileComponent } from './traveller-create-profile.component';

describe('TravellerCreateProfileComponent', () => {
  let component: TravellerCreateProfileComponent;
  let fixture: ComponentFixture<TravellerCreateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerCreateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
