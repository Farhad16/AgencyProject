import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agency-search-guider',
  templateUrl: './agency-search-guider.component.html',
  styleUrls: ['./agency-search-guider.component.scss']
})
export class AgencySearchGuiderComponent implements OnInit {
  public usersData = [];

  constructor(private _data :DataService) { }


  invite(getEmail){
    let getGuiEmail = getEmail.textContent
    let info = {
      email: sessionStorage.getItem('userEmail'),
      password : sessionStorage.getItem('userPassword')
    };
    this._data.inviteAgencyOrGuider(info,getEmail)
      .subscribe(
        ( res: any) => console.log(res),
        ( err: any) => console.log(err)
      )
      console.log(info.email)
      console.log(getGuiEmail)
  }
  
  ngOnInit() {
    let type = "guider";
    this._data.searchGuiderPro(type)
    .subscribe(
      data => 
    {
      this.usersData = data['result'];
      console.log(this.usersData);
    });  
  }

}
