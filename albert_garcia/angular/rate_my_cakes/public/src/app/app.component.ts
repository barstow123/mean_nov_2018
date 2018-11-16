import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { getRandomString } from 'selenium-webdriver/safari';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  newCake = {};
  cakes = [];
  cake = {};
  one: boolean;
  avg: number;
  error: any;

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.newCake = {baker: "", img_url: ""}
    this.showCakes();
  }

  Create(): void {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Added our cake", data);
      this.showCakes();
      this.newCake = {baker:"", img_url: ""};
      if(data['err']){
        this.error = data['err']['errors']['baker']['message'];
        console.log(this.error, "got our errors")
      }
      else{
        this.error = null;
      }
    })
  }

  showCakes(){
    let observable = this._httpService.showAllCakes();
    observable.subscribe(data => {
      console.log("Show our cakes", data);
      this.cakes = data['cakes'];
    })
  }

  showCake(id){

    let observable = this._httpService.showCake(id);
    observable.subscribe(data => {
      console.log("Show this cake", data);
      this.cake = data["cake"];
      let sum = 0;
      let length = this.cake['ratings'].length;
      for(var rating of this.cake['ratings']){
        sum += rating;
      }
      let average = (sum/length);
      this.avg = Math.round(average * 100)/100;
      console.log(this.avg, "+++++++++++++++++++++++")
      this.one = true;
    })
  }

  addReview(cake){
    console.log(cake, "*****************");
    let observable = this._httpService.addReview(cake);
    observable.subscribe(data => {
      console.log("Updated this cake", data);
    })
  }
}
