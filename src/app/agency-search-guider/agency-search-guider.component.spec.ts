import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySearchGuiderComponent } from './agency-search-guider.component';

describe('AgencySearchGuiderComponent', () => {
  let component: AgencySearchGuiderComponent;
  let fixture: ComponentFixture<AgencySearchGuiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySearchGuiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySearchGuiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
