import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
//import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { languageAction } from './store/language/language.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent,OrderComponent, HeaderComponent,RouterOutlet,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
  dir:string='ltr'
  language$:Observable<string>
  constructor(private store:Store<{language:string}>){
    this.language$=this.store.select('language')
    this.language$.subscribe((lang)=>{
      if (lang==="ar"){
        this.dir="rtl"
      }else{
        this.dir="ltr"
      }
    })
  }
 
}
