import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.getAuthors();
  };
  getAuthors(){
    let observable = this._authorService.getAuthors();
    observable.subscribe(data => {
      console.log("Got our authors", data);
      this.authors = data['authors'];
    })
  };
  onDelete(id){
    let observable = this._authorService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Deleted this author", data);
    });
    this.getAuthors();
    // this._router.navigateByUrl('/authors');
  };
  onEdit(id){

  };
}
