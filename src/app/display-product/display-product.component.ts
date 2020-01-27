import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private service: ProductService) {
    this.getProduct();
  }

  Product: any = [];

  productData: any = [];

  getProduct() {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.Product = data;
      console.log(this.Product, 'data Got');
    }, err => {
      console.log(err);
    }, () => {
      console.log('Data getting');
    })
  }


  editProduct(data) {
    console.log(data);
    this.productData = data;
  }

  updateProduct(data: NgForm) {
    this.service.updateData(data).subscribe(data => {
      console.log(data);
      this.getProduct();
    }, err => {
      console.log(err);
    }, () => {
      console.log("data updated successfully");
    });
  }



  deleteProduct(id) {
    this.service.deleteDetails(id).subscribe(data => {
      this.getProduct();
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Product deleted success");
    });

  }


  ngOnInit() {
  }

}
