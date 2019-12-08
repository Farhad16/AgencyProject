import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agency-search-guider',
  templateUrl: './agency-search-guider.component.html',
  styleUrls: ['./agency-search-guider.component.scss']
})
export class AgencySearchGuiderComponent implements OnInit {
  public usersData = [];
  public userDetails = [];

  constructor(private _data: DataService) { }


  invite(getEmail) {
    let getGuiEmail = getEmail.textContent
    let senderEmail = sessionStorage.getItem('userEmail')

    this._data.inviteAgencyOrGuider(senderEmail, getGuiEmail)
      .subscribe(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
    console.log(senderEmail)
    console.log(getGuiEmail)
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
