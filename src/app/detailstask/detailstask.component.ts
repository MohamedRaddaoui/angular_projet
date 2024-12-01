import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailstask',
  templateUrl: './detailstask.component.html',
  styleUrls: ['./detailstask.component.css'],
})
export class DetailstaskComponent {
  task: any;
  id!: string;
  constructor(private ts: TaskService, private act: ActivatedRoute) {
    this.id = this.act.snapshot.params['id'];
    this.ts.getTaskById(this.id).subscribe((data) => {
      this.task = data;
      console.log(this.task);
    });
  }
}
