import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guider-check-notification',
  templateUrl: './guider-check-notification.component.html',
  styleUrls: ['./guider-check-notification.component.scss']
})
export class GuiderCheckNotificationComponent implements OnInit {
  public usersData = [];

  constructor(private _data: DataService) { }

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
