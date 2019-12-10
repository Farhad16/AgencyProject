import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {

  registerUserData = {}
  loginUserData = {}
  // public users = []
  constructor(private _data: DataService) {
  }

  loginUser() {
    console.log("ok")
    this._data.loginUser(this.loginUserData)
      .subscribe(
        res => {
          sessionStorage.setItem('userEmail', res['registerEmail']);
          sessionStorage.setItem('userPassword', res['password']);
          sessionStorage.setItem('userType', res['userType']);
          console.log(res)
          if (res['userType'] == 'guide') {
            location.href = 'GuiderApp';
          }
          else if (res['userType'] == 'agency') {
            location.href = 'AgencyApp';
          }
          else if (res['userType'] == 'traveller') {
            location.href = 'TravellerApp';
          }
        },
        err => console.log(err)
      )
  }


  registerUsers() {
    this._data.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          location.href = '';
        },
        err => console.log(err)
      )
  }


  //Loading jquery 
  public ngOnInit() {
    $(document).ready(function () {
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
    });


    $('.login-reg-panel input[type="radio"]').on('change', function () {
      if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

      }
      else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
      }
    });
  }

}