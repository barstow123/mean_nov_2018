import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient){};

  addAuthor(author){
    console.log(author, "in the service function");
    return this._http.post('/api/authors', {name: author});
  };
  getAuthors(){
    return this._http.get('/api/authors');
  };
  getOne(id){
    return this._http.get(`/api/authors/${id}`);
  };
  editAuthor(id, author){
    return this._http.put(`/api/authors/${id}`, author);
  };
  deleteAuthor(id){
    return this._http.delete(`/api/authors/${id}`)
  }
}
