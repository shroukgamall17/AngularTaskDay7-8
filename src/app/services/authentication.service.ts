import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authSubject:BehaviorSubject<boolean>
  constructor() { 
    this.authSubject=new BehaviorSubject(false)
  }
  login(){
    localStorage.setItem('token','gfdgghtrsadcmyghvvdes')
    this.authSubject.next(true);
  }
  logout(){
    localStorage.removeItem("token")
    this.authSubject.next(false);
  }
  isLoggedIn():boolean{
   return localStorage.getItem( "token" )?true:false;
  }
  getAuthSubject():BehaviorSubject<boolean>{
    return this.authSubject
  }
  getToken():any{
    return localStorage.getItem("token")?localStorage.getItem("token"):null;
  }
}
