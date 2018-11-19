import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask('5be4be90cc9ac666a2119fb4');
  }
  getTasks() {
    //let tempObservable = this._http.get('/tasks');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTask(id: string) {
    //let tempObservable2 = this._http.get('/tasks/5be4be90cc9ac666a2119fb4');
    //tempObservable2.subscribe(data => console.log('Got a task!', data));
    return this._http.get(`/tasks/${id}`);
  }
  postTask(task: {title: string, description: string}) {
    return this._http.post(`/task`, task);
  }
  updateTask(task: {title: string, description: string, completed: boolean, _id: string}) {
    return this._http.put(`/update/${task['_id']}`, task)
  }
  deleteTask(id: string) {
    return this._http.delete(`/delete/${id}`);
  }
}
