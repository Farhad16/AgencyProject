import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerSearchAgencyComponent } from './traveller-search-agency.component';

describe('TravellerSearchAgencyComponent', () => {
  let component: TravellerSearchAgencyComponent;
  let fixture: ComponentFixture<TravellerSearchAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerSearchAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerSearchAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
