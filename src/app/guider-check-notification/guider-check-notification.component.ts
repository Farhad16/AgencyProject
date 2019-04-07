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
  constructor(private _data: DataService) { }

  showDetails(getEmail){
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

  myfunction()
    {
      document.getElementById("detail").style.display = "block";
    } 
  ngOnInit() {
    let rcvEmail = sessionStorage.getItem('userEmail');
    this._data.collectNotifyEmail(rcvEmail)
    .subscribe(
      data => 
    {
      
      this.usersData = data['noti'];
      console.log(this.usersData);
    });  
  }

}
