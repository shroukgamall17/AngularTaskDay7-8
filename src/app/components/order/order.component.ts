import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../models/iproduct';
//import { StaticProductService } from '../../services/static-product.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories:Icategory[];
  selectedCatId:number=0;
  productsBought: Iproduct[] = [];
  constructor(){
    this.categories=[
      {id:10, name:"Mobiles"},
      {id:20,name:"Laptops"},
      {id:30,name:"Tablets"}
    ];
    //private _StaticProductService: StaticProductService
    //this.productsBought=this._StaticProductService.products;
  }

sendProduct(product: Iproduct) {
  const existingProduct = this.productsBought.find(p => p.id === product.id);
  

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.price = product.price * existingProduct.quantity;
    
  } else {
    this.productsBought.push({ ...product, quantity: 1 }); 
  }
  
}



  removeProduct(product: Iproduct) {
    const existingProduct = this.productsBought.find(p => p.id == product.id);
    if (existingProduct) {
      existingProduct.price -= product.price;
      existingProduct.quantity--; 
      if (existingProduct.quantity == 0) {
       
        const index = this.productsBought.indexOf(existingProduct);
        this.productsBought.splice(index, 1);
      } else {
        
        existingProduct.price = product.price * existingProduct.quantity;
      }
    }
  }
}
