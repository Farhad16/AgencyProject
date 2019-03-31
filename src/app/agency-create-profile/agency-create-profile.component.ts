import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agency-create-profile',
  templateUrl: './agency-create-profile.component.html',
  styleUrls: ['./agency-create-profile.component.scss']
})
export class AgencyCreateProfileComponent implements OnInit {

 
  createProfile = {
    email: sessionStorage.getItem('userEmail'),
    password : sessionStorage.getItem('userPassword')
  };
  
  constructor(private _data : DataService) { }
  createTravellerProfile(){
    this._data.createPro(this.createProfile)
      .subscribe(
        ( res: any) => console.log(res),
        ( err: any) => console.log(err)
      )
      // console.log(this.createProfile.email);
       location.href = 'TravellerApp';
  }


  ngOnInit() {
  }

}
