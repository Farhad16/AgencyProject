import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-home',
  templateUrl: './traveller-home.component.html',
  styleUrls: ['./traveller-home.component.scss']
})
export class TravellerHomeComponent implements OnInit {

  public usersData = [];
  constructor(private _data: DataService) { }


  

  ngOnInit() {
    let info = {
      email: sessionStorage.getItem('userEmail'),
      password : sessionStorage.getItem('userPassword')
    };
    this._data.getData(info)
      .subscribe(
        data => 
      {
        this.usersData = data['data'];
        console.log(this.usersData);
      });  
  }
  

}