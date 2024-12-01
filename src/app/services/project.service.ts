import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:3000/projects');
  }
  getProject(id: number) {
    return this.http.get<Project>('http://localhost:3000/projects/' + id);
  }
  addProject(prod: Project) {
    return this.http.post('http://localhost:3000/projects', prod);
  }
}
