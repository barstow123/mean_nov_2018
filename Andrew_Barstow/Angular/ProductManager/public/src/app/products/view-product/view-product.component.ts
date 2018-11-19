import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {title: '', price: 0, qty: 0};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getProductFromService(params['id']);
    });
  }

  getProductFromService(id) {
    let observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      this.product = data['data'];
    })
  }

  destroyProduct(product) {
    if (product.qty == 0) {
    let observable = this._httpService.deleteProduct(product._id);
    observable.subscribe(() => {
      console.log('product destroyed! ' + product._id);
    });
    this._router.navigate(['products']);
    }
  }

}
