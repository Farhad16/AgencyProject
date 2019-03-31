import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GuiderHomeComponent } from './guider-home/guider-home.component'
import { FormsModule } from '@angular/forms';
import { GuiderCreateProfileComponent } from './guider-create-profile/guider-create-profile.component';
import { GuiderUpdateProfileComponent } from './guider-update-profile/guider-update-profile.component';
import { GuiderCheckNotificationComponent } from './guider-check-notification/guider-check-notification.component';
import { TravellerHomeComponent } from './traveller-home/traveller-home.component';
import { TravellerCreateProfileComponent } from './traveller-create-profile/traveller-create-profile.component';
import { TravellerUpdateProfileComponent } from './traveller-update-profile/traveller-update-profile.component';
import { TravellerSearchGuiderComponent } from './traveller-search-guider/traveller-search-guider.component';
import { TravellerSearchAgencyComponent } from './traveller-search-agency/traveller-search-agency.component';
import { TravellerAppComponent } from './traveller-app/traveller-app.component';
import { GuiderAppComponent } from './guider-app/guider-app.component';
import { AgencyAppComponent } from './agency-app/agency-app.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyCreateProfileComponent } from './agency-create-profile/agency-create-profile.component';
import { AgencyUpdateProfileComponent } from './agency-update-profile/agency-update-profile.component';
import { AgencySearchGuiderComponent } from './agency-search-guider/agency-search-guider.component';
import { AgencySeeNotificationComponent } from './agency-see-notification/agency-see-notification.component';
import { AgencySeeProfileComponent } from './agency-see-profile/agency-see-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    GuiderHomeComponent,
    GuiderCreateProfileComponent,
    GuiderUpdateProfileComponent,
    GuiderCheckNotificationComponent,
    TravellerHomeComponent,
    TravellerCreateProfileComponent,
    TravellerUpdateProfileComponent,
    TravellerSearchGuiderComponent,
    TravellerSearchAgencyComponent,
    TravellerAppComponent,
    GuiderAppComponent,
    AgencyAppComponent,
    AgencyHomeComponent,
    AgencyCreateProfileComponent,
    AgencyUpdateProfileComponent,
    AgencySearchGuiderComponent,
    AgencySeeNotificationComponent,
    AgencySeeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
