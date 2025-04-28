import { Component, OnInit } from '@angular/core';
import { order } from '../data-type';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  imports: [CommonModule],
})
export class MyOrdersComponent implements OnInit {
  orderData: order[] | undefined;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    // this.getOrderList();
    this.product.orderList().subscribe((result) => {
      this.orderData = result;
    });
  }

  // getOrderList() {
  //   this.product.orderList().subscribe((result) => {
  //     this.orderData = result;
  //   });
  // }
}
