import { Component, OnInit } from '@angular/core';
import{Task} from '../task';
import{TaskServiceService} from '../task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  // Task: string;
  // Priority: number;
  // ParentTask: string;
  // StartDate: Date;

  task:object = {};
  taskId:any;
  // taskObj:Task;
  constructor(private api: TaskServiceService,public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.taskId = +params["id"];
    });
    this.getTaskId(this.taskId);
  }

  getTaskId(taskId){
    this.api.getTaskById(taskId)
    .subscribe(res=>{
      this.task=res;      
    });
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

}
