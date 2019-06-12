import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/viewTask', pathMatch: 'full' },
  {
    path: 'viewTask', component: ViewTaskComponent
  },
  {
    path: 'addTask', component: AddTaskComponent
  },
  {
    path: 'updateTask', component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
