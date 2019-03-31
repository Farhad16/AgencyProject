import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerSearchGuiderComponent } from './traveller-search-guider.component';

describe('TravellerSearchGuiderComponent', () => {
  let component: TravellerSearchGuiderComponent;
  let fixture: ComponentFixture<TravellerSearchGuiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerSearchGuiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerSearchGuiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
