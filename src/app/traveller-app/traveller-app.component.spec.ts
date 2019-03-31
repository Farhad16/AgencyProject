import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerAppComponent } from './traveller-app.component';

describe('TravellerAppComponent', () => {
  let component: TravellerAppComponent;
  let fixture: ComponentFixture<TravellerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
