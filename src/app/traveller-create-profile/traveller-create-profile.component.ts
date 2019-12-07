import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-create-profile',
  templateUrl: './traveller-create-profile.component.html',
  styleUrls: ['./traveller-create-profile.component.scss']
})
export class TravellerCreateProfileComponent implements OnInit {

  createProfile = {
    email: sessionStorage.getItem('userEmail'),
    password: sessionStorage.getItem('userPassword')
  };

  constructor(private _data: DataService) { }

  createTravellerProfile() {
    this._data.createPro(this.createProfile)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    //console.log(this.createProfile['name'])
    // console.log(this.createProfile.email);
    location.href = 'TravellerApp/travellerPro';
  }


  ngOnInit() {
  }

}
