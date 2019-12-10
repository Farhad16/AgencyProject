import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-update-profile',
  templateUrl: './traveller-update-profile.component.html',
  styleUrls: ['./traveller-update-profile.component.scss']
})
export class TravellerUpdateProfileComponent implements OnInit {


  public usersData = [];



  constructor(private _data: DataService) { }

  updateTravellerProfile(name, phone, gender, telephone, address, places) {
    console.log("if work")
    console.log(address)
    console.log(places)
    let email = sessionStorage.getItem('userEmail');
    this._data.update(email, name, phone, gender, telephone, address, places)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    // console.log(this.createProfile.email);
    location.href = 'TravellerApp/travellerPro/travellerSeePro';
  }


  ngOnInit() {
    let info = {
      email: sessionStorage.getItem('userEmail'),
      password: sessionStorage.getItem('userPassword')
    };
    this._data.getData(info)
      .subscribe(
        data => {
          this.usersData = data['data'];
          console.log(this.usersData);
        });
  }

}

