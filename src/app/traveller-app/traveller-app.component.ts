import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-traveller-app',
  templateUrl: './traveller-app.component.html',
  styleUrls: ['./traveller-app.component.scss']
})
export class TravellerAppComponent implements OnInit {

  public usersData = [];
  constructor(private _data: DataService) { }

  logout(){
    sessionStorage.clear();
    location.href = '';
    console.log('delete');
  }
  

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
