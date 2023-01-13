import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any;
  cart:any;
  cartItem=[]; // for car list show
  imgPath: string = environment.image_path;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  minus(){

  }
  plus(){

  }
  addToCart(){

  }
  removeCart(){

  }

}
