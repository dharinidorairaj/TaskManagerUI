import { Component, OnInit } from '@angular/core';
import{Task} from '../task';
import{TaskServiceService} from '../task-service.service'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:object = {};
  constructor(private api: TaskServiceService) { }

  ngOnInit() {
    console.log("Hello");
  }

  addTask(task:Task){
    console.log('data',task);
    this.api.addTask(task)
    .subscribe(res => {
      console.log(res);
      // this.books = res;
    }, err => {
      console.log(err);
    });
    
  }

  updateTask(){

  }
  getTaskById(id:string) {
    this.api.getTaskById(id)
    .subscribe(res => {
      console.log(res);
      // this.books = res;
    }, err => {
      console.log(err);
    });

  }
}
