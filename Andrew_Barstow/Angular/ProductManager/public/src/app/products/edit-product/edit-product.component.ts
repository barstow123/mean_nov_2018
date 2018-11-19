import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  oldProduct: any;
  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {title: '', price: 0, qty: 0}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getProductFromService(params['id']);
    })
    this.createForm();
  }

  updateCurrentProduct() {
    console.log('updating product...');
    console.log(this.product);
    let observable = this._httpService.updateProduct(this.product);
    observable.subscribe((data) => {
      if (data['err']) {

      } else {
        console.log('product updated! ' + this.product);
        this.product = {title: '', price: 0, qty: 0, _id: ""};
        this._router.navigate(['products']);
      }
    });
  }
  destroyProduct(product) {
    let observable = this._httpService.deleteProduct(product._id);
    observable.subscribe(() => {
      console.log('product destroyed! ' + product._id);
    });
    this._router.navigate(['products']);
  }
  getProductFromService(id) {
    let observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      this.product = data['data'];
      this.oldProduct = {title: this.product.title, price: this.product.price, qty: this.product.qty}
    })
  }
  createForm() {
    this.productForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^[-]?[0-9]*(.[0-9][0-9])$/)
      ]),
      'qty': new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^[-]?[0-9]*$/)
      ])
    });
  }
  resetForm() {
    console.log('product: ' + this.product.title);
    console.log('oldProduct: ' + this.oldProduct.title);
    this.product = {title: this.oldProduct.title, price: this.oldProduct.price, qty: this.oldProduct.qty, _id: this.product._id};
  }
}
