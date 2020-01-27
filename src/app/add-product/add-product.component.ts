import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  newProduct: any = [];

  addProduct(data) {
    console.log(data);
    this.service.postData(data).subscribe(data => {
      console.log(data);
      this.newProduct = data;
    }, err => {
      console.log(err)
    }, () => {
      this.router.navigate(['./displayProduct'])
      // data.reset();
      console.log('data posted');
    })
  }

  ngOnInit() {
  }

}
