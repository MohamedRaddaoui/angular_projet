import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  listTask: any;
  constructor(private taskS: TaskService) {
    this.taskS.getTasks().subscribe((data) => {
      this.listTask = data;
    });
  }
}
