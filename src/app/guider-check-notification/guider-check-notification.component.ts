import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guider-check-notification',
  templateUrl: './guider-check-notification.component.html',
  styleUrls: ['./guider-check-notification.component.scss']
})
export class GuiderCheckNotificationComponent implements OnInit {
  public usersData = [];
  public userDetails = [];
  public inviteDetails = [];

  constructor(private _data: DataService) { }

  detailsSender(getEmail) {
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

  showDetails(getEmail) {
    let email = getEmail.textContent
    this._data.getInviteDetails(email)
      .subscribe(
        data => {
          this.inviteDetails = data['info']['0']
        }
      )
    console.log(email)
    console.log(this.inviteDetails)
  }

  detailOfSender() {
    document.getElementById("senderDetails").style.display = "block";
  }

  checkInvite() {
    document.getElementById("detailsInvite").style.display = "block";
  }

  ngOnInit() {
    let rcvEmail = sessionStorage.getItem('userEmail');
    this._data.collectNotifyEmail(rcvEmail)
      .subscribe(
        data => {

          this.usersData = data['noti'];
          console.log(this.usersData);
        });
  }

}
