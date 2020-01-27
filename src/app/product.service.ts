import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  postData(data) {
    return this.http.post(`${this.url}/postProduct`, data);
  }

  getData() {
    return this.http.get(`${this.url}/getProduct`)
  }

  updateData(data) {
    console.log(data.value,'data in service')
    return this.http.post(`${this.url}/updateProduct`, data.value);
  }

  

  deleteDetails(id){
    return this.http.delete(`${this.url}/deleteProduct/${id}`);
  }
}
