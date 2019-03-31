import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

//Import Guider Component
import { GuiderAppComponent } from './guider-app/guider-app.component';
import { GuiderHomeComponent } from './guider-home/guider-home.component'
import { GuiderCreateProfileComponent } from './guider-create-profile/guider-create-profile.component';
import { GuiderUpdateProfileComponent } from './guider-update-profile/guider-update-profile.component';
import { GuiderCheckNotificationComponent } from './guider-check-notification/guider-check-notification.component';

//Import Traveller Component
import { TravellerAppComponent } from './traveller-app/traveller-app.component';
import { TravellerHomeComponent } from './traveller-home/traveller-home.component';
import { TravellerCreateProfileComponent } from './traveller-create-profile/traveller-create-profile.component';
import { TravellerUpdateProfileComponent } from './traveller-update-profile/traveller-update-profile.component';
import { TravellerSearchAgencyComponent } from './traveller-search-agency/traveller-search-agency.component';
import { TravellerSearchGuiderComponent } from './traveller-search-guider/traveller-search-guider.component';

//Import Agency Components
import { AgencyAppComponent } from './agency-app/agency-app.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyCreateProfileComponent } from './agency-create-profile/agency-create-profile.component';
import { AgencyUpdateProfileComponent } from './agency-update-profile/agency-update-profile.component';
import { AgencySearchGuiderComponent } from './agency-search-guider/agency-search-guider.component';
import { AgencySeeNotificationComponent } from './agency-see-notification/agency-see-notification.component';
import { AgencySeeProfileComponent } from './agency-see-profile/agency-see-profile.component';






const routes: Routes = [
  {
    path: '',
    component: LoginRegistrationComponent
  },
  {
    path: 'GuiderApp',
    component: GuiderAppComponent,
    children: [
      { path: 'GuiderHome',component: GuiderHomeComponent },
      { path: 'guiderCrPro', component: GuiderCreateProfileComponent },
      { path: 'guiderUpPro', component: GuiderUpdateProfileComponent },
      { path: 'guiderCkNt', component: GuiderCheckNotificationComponent },
    ]
  },
  {
    path: 'TravellerApp' ,component: TravellerAppComponent,
   
    children: [
      { path: 'travellerHome',component: TravellerHomeComponent },
      { path: 'travellerCrPro', component: TravellerCreateProfileComponent },
      { path: 'travellerUpPro', component: TravellerUpdateProfileComponent },
      { path: 'travellerSrAgPro', component: TravellerSearchAgencyComponent },
      { path: 'travellerSrGuiPro', component: TravellerSearchGuiderComponent },
    ]
  },

  {
    path: 'AgencyApp', component: AgencyAppComponent,

    children:[
      { path: 'agencyHome', component: AgencyHomeComponent,
        
        children:
        [
          { path: 'agencyCrPro', component: AgencyCreateProfileComponent },
          { path: 'agencyUpPro', component: AgencyUpdateProfileComponent },
          { path: 'agencySeePro', component: AgencySeeProfileComponent }    
        ]
      },
      { path: 'agencySrcGdr', component: AgencySearchGuiderComponent },
      { path: 'agencySeeNoti', component: AgencySeeNotificationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [
  LoginRegistrationComponent,
  GuiderAppComponent,
  GuiderHomeComponent,
  GuiderCreateProfileComponent,
  GuiderUpdateProfileComponent,
  GuiderCheckNotificationComponent,
  TravellerAppComponent,
  TravellerHomeComponent,
  TravellerCreateProfileComponent,
  TravellerUpdateProfileComponent,
  TravellerSearchAgencyComponent,
  TravellerSearchGuiderComponent
]
