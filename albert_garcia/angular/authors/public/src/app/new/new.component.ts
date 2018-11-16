import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name: string;
  errors: any;
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
  };
  onSubmit(){
    console.log(this.name);
    let observable = this._authorService.addAuthor(this.name);
    observable.subscribe(data => {
      console.log("Added an author", data);
      this.name = null;
      if(data['err']){
        this.errors = data['err']['errors']['name']['message'];
        console.log(this.errors, "got our errors")
      }
      else{
        this.errors = null;
        this._router.navigateByUrl('/authors');
      }
    });
    // if(this.errors){
    //   this._router.navigateByUrl('/authors');
    // };
  };

}
