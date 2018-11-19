import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit {

  @Input() displayDesc: string;
  @Input() taskTitle: string;
  @Input() taskDesc: string;
  constructor() { }

  ngOnInit() {
  }

}
