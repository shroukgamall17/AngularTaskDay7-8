import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  products:Iproduct[];
  constructor() {
    this.products=[
      {id:1,name:"iphone15 mobile",img:"https://tse1.mm.bing.net/th/id/OIP.RYd8HSOdXOMIRUg_RDmVNgHaHa?rs=1&pid=ImgDetMain",price:50000,quantity:3,categoryID:10},
      {id:2,name:"Samsung mobile",img:"https://tse3.mm.bing.net/th/id/OIP.GvSBGxTVxjsjPvkFansAggAAAA?rs=1&pid=ImgDetMain",price:40000,quantity:1,categoryID:10},
      {id:3,name:"hauawi mobile",img:"https://tse3.mm.bing.net/th/id/OIP.sx4kA_5zaKIfVmxPVu6eOwHaIK?rs=1&pid=ImgDetMain",price:10000,quantity:2,categoryID:10},
      {id:4,name:"Dell laptop",img:"https://tse2.mm.bing.net/th/id/OIP.BgX0pmZ2FkSaMbWhKzJiXgHaHa?rs=1&pid=ImgDetMain",price:45000,quantity:3,categoryID:20},
      {id:5,name:"HP laptop",img:"https://tse3.mm.bing.net/th/id/OIP.YTVIQ_Q44rxae2uL9r6DMgHaGS?rs=1&pid=ImgDetMain",price:60000,quantity:1,categoryID:20},
      {id:6,name:"apple laptop",img:"https://th.bing.com/th/id/R.d8cd971f51af2e56b6a40d51430ccfd0?rik=YagWWBW31Su8pQ&pid=ImgRaw&r=0",price:65000,quantity:0,categoryID:20},
      {id:7,name:"Lenovo tablet",img:"https://tse3.mm.bing.net/th/id/OIP.CzMXQM9v752tG4PLn0e7igHaHa?rs=1&pid=ImgDetMain",price:30000,quantity:2,categoryID:30},
      {id:8,name:"Huawei MatePad",img:"https://tse2.mm.bing.net/th/id/OIP.gRv2RmgeXbVCAcuCLMr-oQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",price:35000,quantity:0,categoryID:30},
      {id:9,name:"Ipad Apple",img:"https://tse2.mm.bing.net/th/id/OIP.MeP3I_5NZZ4hMtR83SxvmgHaIX?rs=1&pid=ImgDetMain",price:32000,quantity:4,categoryID:30},
    ];
   }
   getAllProducts():Iproduct[]{
    return this.products;
   }
   getProductById(id:number):Iproduct|null{
     let product=this.products.find((prod)=> prod.id==id);
     return product?product:null;

   }
   getProductByCatId(catId:number):Iproduct[]{
    return this.products.filter((p)=>p.categoryID==catId);
   }
   mapProductsToIds():number[]{
   return this.products.map((item) =>item.id)
   }
}
