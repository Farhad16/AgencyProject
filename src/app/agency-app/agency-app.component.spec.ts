import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyAppComponent } from './agency-app.component';


describe('AgencyAppComponent', () => {
  let component: AgencyAppComponent;
  let fixture: ComponentFixture<AgencyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
