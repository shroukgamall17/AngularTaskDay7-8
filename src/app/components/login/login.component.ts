import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  isUserLogged!: boolean ;
  constructor(private _authentication: AuthenticationService) {}
  ngOnInit(): void {
    this.isUserLogged=this._authentication.isLoggedIn()
  }

  login(){
    this._authentication.login()
    this.isUserLogged=this._authentication.isLoggedIn()
    
  }
  logout(){
    this._authentication.logout()
    this.isUserLogged=this._authentication.isLoggedIn()
    
  }

}
