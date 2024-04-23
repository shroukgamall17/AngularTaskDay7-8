import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
//import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';
import { CreditPipePipe } from '../../pipes/credit-pipe.pipe';
import { StaticProductService } from '../../services/static-product.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HoverCardDirective,
    PipeTransformPipe,
    CreditPipePipe,
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges, OnInit {
  products: Iproduct[] = [] as Iproduct[];
  filteredProducts: Iproduct[];
  @Input() received: number = 0;
  //egyptianNationalId:string='29909011509345';
  // creditCardId:string='0000000000000000';
  //define event
  @Output() onProductBought: EventEmitter<Iproduct>;
  constructor(
    private _ApiProducts: ApiProductsService,
    private router: Router
  ) {
    this.onProductBought = new EventEmitter<Iproduct>();
    this.filteredProducts = this.products;
  }
  ngOnInit(): void {
    this._ApiProducts.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: () => {
        console.log(console.error());
      },
    });
  }
  ngOnChanges() {
    this._ApiProducts.getProductsByCatId(this.received).subscribe({
      next: (res) => {
        this.filteredProducts = res;
      },
      error: () => {},
    });
    // console.log(this.received)
    // if(this.received == 0){
    //   this.filteredProducts = this._staticProductsService.products;
    // } else {
    //   this.filteredProducts = this._staticProductsService.getProductByCatId(this.received);
    // }
  }
  buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onProductBought.emit(product);
  }

  // filterProducts(){
  //   if(this.received==0){
  //     this.filteredProducts=this.products;
  //   }else{
  //     this.filteredProducts=this.products.filter((item)=>item.categoryID==this.received);
  //   }
  // }

  navigateToDetailes(id: number) {
    // this.router.navigate(['/details']);
    this.router.navigateByUrl(`/details/${id}`);
  }

  editProduct(product: Iproduct) {

          this.router.navigateByUrl(`/addProduct/${product.id}`)
      
    
  }

  deleteProduct(id: number): void {
    this._ApiProducts.deleteProduct(id).subscribe({
      next: () => {
        const index = this.filteredProducts.findIndex(
          (product) => product.id == id
        );
       
        if (index != -1) {
          this.filteredProducts.splice(index, 1);
        }
      },
      error: (error) => {
        console.error('Error deleting product:', error);
      },
    });
  }
}
