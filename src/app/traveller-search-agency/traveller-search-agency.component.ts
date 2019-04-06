import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-search-agency',
  templateUrl: './traveller-search-agency.component.html',
  styleUrls: ['./traveller-search-agency.component.scss']
})
export class TravellerSearchAgencyComponent implements OnInit {
  public usersData = [];

  constructor(private _data :DataService) { }


  invite(getEmail){
    let getGuiEmail = getEmail.textContent
    let senderEmail = sessionStorage.getItem('userEmail')
    
    this._data.inviteAgencyOrGuider(senderEmail,getGuiEmail)
      .subscribe(
        ( res: any) => console.log(res),
        ( err: any) => console.log(err)
      )
      console.log(senderEmail)
      console.log(getGuiEmail)
  }
  
  ngOnInit() {
    let type = "agency";
    this._data.searchAgencyPro(type)
    .subscribe(
      data => 
    {
      this.usersData = data['result'];
      console.log(this.usersData);
    });  
  }

}
