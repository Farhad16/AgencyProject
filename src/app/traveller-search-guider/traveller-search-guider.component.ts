import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Button } from 'protractor';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-traveller-search-guider',
  templateUrl: './traveller-search-guider.component.html',
  styleUrls: ['./traveller-search-guider.component.scss']
})
export class TravellerSearchGuiderComponent implements OnInit {
  public usersData = [];
  public userDetails = [];
  public inviteData = {
    senderEmail: sessionStorage.getItem('userEmail'),
    getGuideEmail: ""
  }

  constructor(private _data: DataService) { }


  invite(getEmail) {
    let getGuideEmail = getEmail.textContent;
    console.log(this.inviteData.getGuideEmail)
    this._data.inviteAgencyOrGuider(this.inviteData, getGuideEmail)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )

  }


  pageload() {
    location.href = 'TravellerApp/travellerSrGuiPro';
  }

  showDetails(getEmail) {
    let email = getEmail.textContent
    this._data.getSndrDetails(email)
      .subscribe(
        data => {
          this.userDetails = data['details']['0']
        }
      )
    console.log(email)
    console.log(this.userDetails)
  }

  myfunction() {
    document.getElementById("detail").style.display = "block";
  }

  buttonDisable(event: any) {
    alert("Invitation is send")
    event.target.disabled = true;
  }

  ngOnInit() {
    let type = "guide";
    this._data.searchGuiderPro(type)
      .subscribe(
        data => {
          this.usersData = data['result'];
          console.log(this.usersData);
        });
  }

}
