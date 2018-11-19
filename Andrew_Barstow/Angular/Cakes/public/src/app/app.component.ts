import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate my Cakes';
  cakes: Object[];
  newCake: any;
  rating: {stars: number,comment: string};
  cakeToShow: string;

  constructor(private _cakeService: CakeService){}

  ngOnInit() {
    this.cakes = [];
    this.newCake = { name: "", imageURL: "" };
    this.rating = {stars: 0, comment: ""};
    this.cakeToShow = "";

  }

  getAllCakes(){
    let observable = this._cakeService.getCakes();
    observable.subscribe(data => {
      console.log("Retrieving all cakes", data);
      this.cakes = data['cakes'];
    });
  }

  createCake(){
    let observable = this._cakeService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Creating cake in database", data);
      //clean it
      this.newCake = {name:"", imageURL: ""};
      //search
      this.getAllCakes();
    });
  }

  createRating(cake) {
    console.log("got here", cake);
    this.rating = {stars: cake.stars, comment: cake.comment}
    let observable = this._cakeService.addRating(cake, this.rating);
    observable.subscribe(data => {
      console.log("Creating rating in database", data);
      //clean it
      this.rating = {stars: 0, comment: ""};
      this.getAllCakes();
    });
  }

  showProfile(cake) {
    this.cakeToShow = cake;
  }
}
