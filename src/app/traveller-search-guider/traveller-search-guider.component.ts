import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-search-guider',
  templateUrl: './traveller-search-guider.component.html',
  styleUrls: ['./traveller-search-guider.component.scss']
})
export class TravellerSearchGuiderComponent implements OnInit {
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
