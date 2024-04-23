import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decreaseCounter, increaseCounter } from '../../store/counter/counter.action';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  subscribtion!:Subscription
  notifications:string[]=[]
  counter:Observable<number>
  // count!:number
  constructor(private _notifications:NotificationService,private store:Store<{counter:number}>){
    this.counter=this.store.select('counter')
    // this.counter.subscribe((newVal)=>{
    // this.count=newVal;
    // })
  }
  
  ngOnInit() {
    // this._notifications.getNotifications().subscribe((response)=>{
    //   console.log(response);
      
    // });
  this.subscribtion=this._notifications.getNotifications().subscribe({
      next:(notification)=>{
        //console.log(notification)
        this.notifications.push(notification)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        alert("No more notifications");
      }
    })
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe()
  }
  deleteNote(i:number){
    this.notifications.splice(i,1)
  }
  increaseCountVal(){
    this.store.dispatch(increaseCounter())
  }
  decreaseCountVal(){
    this.store.dispatch(decreaseCounter())
  }
}
