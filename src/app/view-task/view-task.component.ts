import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/task';
import{TaskServiceService} from '../task-service.service'
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
//  task={
//    name:'',
//    parentName:''
//  }
//  tasks:Task[]=[];

 taskList: Task[];
 searchTaskList: Task[];
 
  constructor(private api: TaskServiceService, public router: RouterModule) { 
    this.getAllTasksDetails();
  }

  ngOnInit() {
  }
onSelect(task){
  console.log(task);
}
getAllTasksDetails() {
  this.api.getTask()
    .subscribe(res => {
      this.taskList = res;
      // this.updateSearchList();
    });
}

endTask(taskID) {
  this.api.endTask(taskID)
    .subscribe((data: any) => {
      console.log(data);
      window.location.reload();
    },
      function (error) {
        console.log(error);
      },
      function () {
        console.log('End Task');
      });
}

editTask(task: any){
  // this.api.addTask = task;
  // this.router.navigate(['/edittask']);
}

}
