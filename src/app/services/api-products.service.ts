import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from './../../environments/environment.development';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  state: BehaviorSubject<boolean>= new BehaviorSubject(false);

  constructor(private httpClient:HttpClient,private _AuthenticationService:AuthenticationService) { }
  getAllProducts():Observable<Iproduct[]>{
  return  this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`,{
    headers:new HttpHeaders({
     // "authorization":this._AuthenticationService.getToken()
    })
  })
  }
  getProductById(id:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }
  getProductsByCatId(catId:number):Observable<Iproduct[]>{
    let searchString= new HttpParams()
    searchString=searchString.append("categoryID",catId)
    searchString=searchString.append("limit",5)
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`,{
      //params:new HttpParams().set("categoryID",catId)
      params:searchString
    })
  }
  deleteProduct(id:number):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/products/${id}`);
  }
  updateProduct(id:number,product:Iproduct):Observable<Iproduct>{
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/products/${id}`,product)
  }
  addProduct(product:Iproduct):Observable<Iproduct>{
    return  this.httpClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(product))
  }
}
