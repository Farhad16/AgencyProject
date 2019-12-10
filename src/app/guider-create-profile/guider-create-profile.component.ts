import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guider-create-profile',
  templateUrl: './guider-create-profile.component.html',
  styleUrls: ['./guider-create-profile.component.scss']
})
export class GuiderCreateProfileComponent implements OnInit {

  createProfile = {
    email: sessionStorage.getItem('userEmail'),
    password: sessionStorage.getItem('userPassword'),
    type: sessionStorage.getItem('userType')
  };

  constructor(private _data: DataService) { }
  createGuiderProfile() {
    this._data.createPro(this.createProfile)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    // console.log(this.createProfile.email);
    location.href = 'GuiderApp/GuiderPro/guiderSeePro';
  }

  ngOnInit() {
  }

}
