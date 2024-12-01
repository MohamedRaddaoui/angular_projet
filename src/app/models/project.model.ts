import { Task } from './task.model';

export class Project {
  id!: number;
  title!: string;
  description!: string;
  tasks!: Task[];
}
