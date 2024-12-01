import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { Project } from '../models/project.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
})
export class AddtaskComponent {
  formTask = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dateDebut: new FormControl(''),
    dateFin: new FormControl(''),
  });
  id!: number;
  project!: Project;
  constructor(
    private ps: ProjectService,
    private ts: TaskService,
    private route: Router,
    private act: ActivatedRoute
  ) {
    this.id = this.act.snapshot.params['id'];
    this.ps.getProject(this.id).subscribe((data) => (this.project = data));
  }
  add() {
    const FormValue = this.formTask.value;

    const task: Task = {
      id: Number(FormValue.id) ?? 0,
      title: FormValue.title ?? '',
      dateD: FormValue.dateDebut ?? '',
      dateF: FormValue.dateFin ?? '',
      status: 'To Do',
      project: this.project,
    };
    this.ts.addTask(task).subscribe((data) => {
      alert('Task Added');
      this.route.navigateByUrl('/tasks');
    });
  }
}
