import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cake-profile',
  templateUrl: './cake-profile.component.html',
  styleUrls: ['./cake-profile.component.css']
})
export class CakeProfileComponent implements OnInit {
average: number;

  @Input() cake: any;
  constructor() {
  this.average = 0;
 }

  ngOnInit() {
    this.findAverage();
  }

  findAverage(){
    for (let i in this.cake.ratings){
      this.average += this.cake.ratings[i].stars;
    }
    this.average /= this.cake.ratings.length
  }
}
