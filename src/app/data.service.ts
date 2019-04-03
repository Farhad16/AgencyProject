import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IntUser } from './int-user';
import { Observable } from 'rxjs';
import { Invite } from './invite';

@Injectable()
export class DataService {
  
  private _registerurl  = "http://localhost:3000/api/register";
  private _loginUrl     = "http://localhost:3000/api/login";
  private _Url          = "http://localhost:3000/api/profile";
  private _createUrl    = "http://localhost:3000/api/create";
  private _updateUrl    = "http://localhost:3000/api/update";
  private _searchUrl    = "http://localhost:3000/api/search";
  private _inviteUrl    = "http://localhost:3000/api/postInvite";

  // private _searchUrl          = "../assets/demo.json";
  constructor( private http : HttpClient) { }


  registerUser(user){
    return this.http.post<IntUser>(this._registerurl,user)
  }

  // createPro(user){
  //   return this.http.get<IntUser>(this._createUrl,user)
  // }
  createPro(user):Observable<IntUser[]>{
    return this.http.get<IntUser[]>(this._createUrl,{params:{"email": user.email, 
                                                      "password": user.password, 
                                                      "name": user.name, 
                                                      "phone": user.phone, 
                                                      "telephone": user.telephone,
                                                      "city": user.city, 
                                                      "gender" : user.gender,
                                                      "description": user.description}})
  }

  //Update Users
  update(email,name,phone,gender,telephone,city,description):Observable<IntUser[]>{
    return this.http.get<IntUser[]>(this._updateUrl,{params:{"email": email, 
                                                      "name":  name, 
                                                      "phone":  phone, 
                                                      "telephone":  telephone,
                                                      "city":  city, 
                                                      "gender" : gender,
                                                      "description": description}})
  }


  loginUser(user){
    return this.http.post<IntUser>(this._loginUrl,user)
  }

  // getData(info){
  //   return this.http.get<IntUser>(this._Url,info);
  // }

// Just checking
  getData(info):Observable<IntUser[]>{
    return this.http.get<IntUser[]>(this._Url,{params:{"email": info.email, "password": info.password}})
  }

  searchGuiderPro(type):Observable<IntUser[]>{
    return this.http.get<IntUser[]>(this._searchUrl,{params:{"city": type}})
  }


  inviteAgencyOrGuider(senderEmail,getGuiEmail){
    return this.http.post<Invite>(this._inviteUrl,{params:{"senderEmail":senderEmail,"getEmail":getGuiEmail}})
  }
}

