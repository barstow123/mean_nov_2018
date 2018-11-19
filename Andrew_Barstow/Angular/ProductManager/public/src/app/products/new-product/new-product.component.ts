import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productForm: FormGroup;

  newProduct: {title: string, price: number, qty: number};
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = { title: "", price: 0, qty: 0}
    this.createForm();
  }

  postNewProduct() {
    console.log('got here');
    let observable = this._httpService.postProduct(this.newProduct);
    observable.subscribe((data) => {
      console.log('product submitted! ' + this.newProduct);
      if (data['err']) {

      } else {
        this.newProduct = {title: '', price: 0, qty: 0};
        this._router.navigate(['products']);
      }
    });
  }
  createForm() {
    this.productForm = new FormGroup({
      'title': new FormControl('string', [
        Validators.required,
        Validators.minLength(3),
      ]),
      'price': new FormControl('number', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^[-]?[0-9]*(.[0-9][0-9])$/)
      ]),
      'qty': new FormControl('number', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^[-]?[0-9]*$/)
      ])
    });
  }
  
}
