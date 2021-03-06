import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agency-update-profile',
  templateUrl: './agency-update-profile.component.html',
  styleUrls: ['./agency-update-profile.component.scss']
})
export class AgencyUpdateProfileComponent implements OnInit {
  public usersData = [];



  constructor(private _data: DataService) { }

  updateAgencyProfile(name, phone, telephone, address, places, payment, about) {
    let email = sessionStorage.getItem('userEmail');
    this._data.update(email, name, phone, telephone, address, places, payment, about)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    // console.log(this.createProfile.email);
    location.href = 'AgencyApp';
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
