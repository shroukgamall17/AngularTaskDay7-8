import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificatins:string[]
  constructor() { 
    this.notificatins = ['Notification 1', 'Notification 2','Notification 3',"", 'Notification 4']
  }
  getNotifications():Observable<string>{
   
    return new Observable<string>(observer=>{
      let counter=0
    let interval= setInterval( () => {
        observer.next(this.notificatins[counter])
        counter++
         if (counter==this.notificatins.length) {
           observer.complete();
         }
         if(this.notificatins[counter]==""){
          observer.error("Error in notification");
         }
       },2000)
       return {
        unsubscribe:()=>clearInterval(interval)
       }
      })
  }
}
