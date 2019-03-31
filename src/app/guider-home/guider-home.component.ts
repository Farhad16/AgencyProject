import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IntUser } from '../int-user';

@Component({
  selector: 'app-guider-home',
  templateUrl: './guider-home.component.html',
  styleUrls: ['./guider-home.component.scss']
})
export class GuiderHomeComponent implements OnInit {

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
