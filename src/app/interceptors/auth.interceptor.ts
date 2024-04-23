import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function authInterceptor(req:HttpRequest<any>,next:HttpHandlerFn){
    let modifiedRequest=req
    if(req.method=='POST'){
        modifiedRequest= req.clone({
            headers:req.headers.append("content-type","application/json")
        })
    }
    return next(modifiedRequest).pipe(
        tap((event)=>{
            if(event.type==HttpEventType.Response){
                console.log(event)
            }
        })
    )
}