import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { languageAction } from '../../store/language/language.action';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLogged!:boolean
  counter$:Observable<number>
  language$:Observable<string>
  currentLang!: string;
  constructor(private _authentication: AuthenticationService,private store:Store<{counter:number,language:string}>) {
    this.counter$=this.store.select('counter')
    this.language$ = this.store.select('language')
   this.language$.subscribe(lang => this.currentLang = lang)
  }
  ngOnInit(): void {
    //this.isLogged=this._authentication.isLoggedIn()
    this._authentication.getAuthSubject().subscribe({
      next:(authStatus)=>{
        this.isLogged=authStatus;
      }
    })
  }

  changeLang(){
    this.store.dispatch(languageAction({lang:(this.currentLang=='en')?'ar':'en'}));
  }
}
