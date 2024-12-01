import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
  addTask(prod: Task) {
    return this.http.post('http://localhost:3000/tasks', prod);
  }
  getTaskById(id: string) {
    return this.http.get<Task>('http://localhost:3000/tasks/' + id);
  }
}
