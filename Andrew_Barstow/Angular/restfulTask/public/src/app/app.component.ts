import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksHtml: string
  tasks: Array<Object>;
  task: Object
  taskDesc: string;
  taskTitle: string;
  taskId: string;
  taskCompleted: boolean;
  display: string;
  displayDesc: string;
  displayEdit: string;
  newTask: {title: string, description: string};
  updateTask: {title: string, description: string, completed: boolean, _id: string};
  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    this.taskDesc = '';
    this.taskTitle = '';
    this.taskId = '';
    this.taskCompleted = false;
    this.newTask = { title: "", description: ""}
    this.updateTask = { title: "", description: "" , completed: false, _id: ''}
    this.tasks = [];
    this.display = 'none';
    this.displayDesc = 'none';
    this.displayEdit = 'none';
    this.getTasksFromService();
    //this.hideTasks();
    //this.getTaskFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
    });
  }
  getTaskFromService() {
    let observable = this._httpService.getTask('5be4be90cc9ac666a2119fb4');
    observable.subscribe(data => {
      console.log('here is the road task');
      this.task = data['data'];
    })
  }
  setTask(task) {
    this.taskDesc = task['description'];
    this.taskTitle = task['title'];
    this.taskId = task['_id'];
    this.taskCompleted = task['completed'];
    console.log(task);
    console.log('console logging data');
  }
  displayTasks() {
    if (this.display === "none") {
        this.display = "block";
    }
  }
  displayDescription(task) {
    this.setTask(task);
    this.hideDisplays();
    if (this.displayDesc === 'none') {
      this.displayDesc = 'block';
    }
  }
  displayEditor(task) {
    this.setTask(task);
    this.hideDisplays();
    this.updateTask = {title: this.taskTitle, description: this.taskDesc, completed: this.taskCompleted, _id: this.taskId};
    if (this.displayEdit === 'none') {
      this.displayEdit = 'block';
    }
  }
  postNewTask() {
    let observable = this._httpService.postTask(this.newTask);
    observable.subscribe(() => {
      console.log('task submitted! ' + this.newTask);
      this.newTask = {title: '', description: ''};
      this.getTasksFromService();
    })
  }
  hideDisplays() {
    this.displayDesc = 'none';
    this.displayEdit = 'none';
  }
  updateCurrentTask() {
    let observable = this._httpService.updateTask(this.updateTask);
    observable.subscribe(() => {
      console.log('task updated! ' + this.updateTask);
      this.updateTask = {title: '', description: '', completed: false, _id: ""};
      this.getTasksFromService();
    })
  }
  destroyTask(id: string) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(() => {
      console.log('task destroyed! ' + id);
      this.getTasksFromService();
    })
  }
  // populateTasks() {
  //   let html = '';
  //   console.log('logging html');
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     html += '<ul>'
  //     for (let i in data['data']) {
  //       html += `<li>${data['data'][i]['title']}<button class = "'data'_btn" data-desc = "${data['data'][i]['description']} (click)="getTaskFromService(${data['data'][i]['_id']})>view more</button></li>`;
  //     }
  //     html += '</ul>';
  //     console.log(html);
  //     this.tasksHtml = html
  //     //document.getElementById('tasks-div').innerHTML = html;
  //   });
  // }
}
