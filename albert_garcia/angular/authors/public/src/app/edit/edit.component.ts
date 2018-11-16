import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {}
  id: any;
  errors: any;
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.getOne();
  };
  getOne(){
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
      let observable = this._authorService.getOne(this.id);
      observable.subscribe(data => {
        if(data['err']){
          this._router.navigateByUrl('/notfound');
        }
        else {
          console.log("Deleted this author", data);
          this.author = data['author'];
          console.log(this.author);
        };
      });
  });
  };
  onSubmit(id){
    let observable = this._authorService.editAuthor(id, this.author);
    observable.subscribe(data => {
      console.log("edited an author", data);

      if(data['err']){
        this.errors = data['err']['errors']['name']['message'];
        console.log(this.errors, "got our errors")
      }
      else{
        this.errors = null;
        this._router.navigateByUrl('/authors');
      };
    });
  };
}
