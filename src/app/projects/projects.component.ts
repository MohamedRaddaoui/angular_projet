import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  listProject: any;
  constructor(private projS: ProjectService) {
    this.projS.getProjects().subscribe((data) => {
      this.listProject = data;
      console.log(data);
    });
  }
}
