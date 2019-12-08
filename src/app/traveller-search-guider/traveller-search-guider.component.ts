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

  constructor(private _data: DataService) { }


  invite(getEmail) {
    let getGuideEmail = getEmail.textContent
    let senderEmail = sessionStorage.getItem('userEmail')

    this._data.inviteAgencyOrGuider(senderEmail, getGuideEmail)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    console.log(senderEmail)
    console.log(getGuideEmail)
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
