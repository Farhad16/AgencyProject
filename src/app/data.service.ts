import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IntUser } from './int-user';
import { Observable } from 'rxjs';
import { Invite } from './invite';
import { Register } from './register';
import { TravellerInt } from './traveller';

@Injectable()
export class DataService {

  private _registerurl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _Url = "http://localhost:3000/api/profile";
  private _createUrl = "http://localhost:3000/api/create";
  private _createTrvallerUrl = "http://localhost:3000/api/createTraveller";
  private _updateUrl = "http://localhost:3000/api/update";
  private _updateTrvallerUrl = "http://localhost:3000/api/updateTraveller";
  private _searchGuiUrl = "http://localhost:3000/api/searchGuider";
  private _searchAgnUrl = "http://localhost:3000/api/searchAgency";
  private _inviteUrl = "http://localhost:3000/api/postInvite";
  private _getNotiUrl = "http://localhost:3000/api/getNotification";
  private _getNotiDetailsUrl = "http://localhost:3000/api/getNotiDetails";

  // private _searchUrl          = "../assets/demo.json";
  constructor(private http: HttpClient) { }


  registerUser(user) {
    return this.http.post<Register>(this._registerurl, user)
  }

  loginUser(user) {
    return this.http.post<IntUser>(this._loginUrl, user)
  }

  // createPro(user){
  //   return this.http.get<IntUser>(this._createUrl,user)
  // }

  createProTraveller(user): Observable<TravellerInt[]> {
    return this.http.get<TravellerInt[]>(this._createTrvallerUrl, {
      params: {
        "email": user.email,
        "password": user.password,
        "type": user.type,
        "name": user.name,
        "phone": user.phone,
        "telephone": user.telephone,
        "address": user.address,
        "gender": user.gender,
        "about": user.about
      }
    })
  }

  updateTraveller(email, name, phone, gender, telephone, address, about): Observable<TravellerInt[]> {
    return this.http.get<TravellerInt[]>(this._updateTrvallerUrl, {
      params: {
        "email": email,
        "name": name,
        "phone": phone,
        "gender": gender,
        "telephone": telephone,
        "address": address,
        "places": about
      }
    })
  }


  createPro(user): Observable<IntUser[]> {
    return this.http.get<IntUser[]>(this._createUrl, {
      params: {
        "email": user.email,
        "password": user.password,
        "type": user.type,
        "name": user.name,
        "phone": user.phone,
        "telephone": user.telephone,
        "address": user.address,
        "payment": user.payment,
        "places": user.places,
        "about": user.about
      }
    })
  }



  //Update Users
  update(email, name, phone, telephone, address, payment, places, about): Observable<IntUser[]> {
    return this.http.get<IntUser[]>(this._updateUrl, {
      params: {
        "email": email,
        "name": name,
        "phone": phone,
        "telephone": telephone,
        "address": address,
        "payment": payment,
        "places": places,
        "about": about
      }
    })
  }


  // getData(info){
  //   return this.http.get<IntUser>(this._Url,info);
  // }

  // Just checking
  getData(info): Observable<IntUser[]> {
    return this.http.get<IntUser[]>(this._Url, { params: { "email": info.email, "password": info.password } })
  }

  searchGuiderPro(type): Observable<IntUser[]> {
    return this.http.get<IntUser[]>(this._searchGuiUrl, { params: { "city": type } })
  }
  searchAgencyPro(type): Observable<IntUser[]> {
    return this.http.get<IntUser[]>(this._searchAgnUrl, { params: { "city": type } })
  }


  inviteAgencyOrGuider(senderEmail, getGuiEmail) {
    return this.http.post<Invite>(this._inviteUrl, { params: { "senderEmail": senderEmail, "getEmail": getGuiEmail } })
  }

  collectNotifyEmail(rcvEmail) {
    return this.http.post<Invite>(this._getNotiUrl, { params: { "getEmail": rcvEmail } })
  }

  getSndrDetails(email): Observable<Invite[]> {
    return this.http.get<Invite[]>(this._getNotiDetailsUrl, { params: { "email": email } })
  }
}

