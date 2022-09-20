import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // '../../Task'
import { TASKSMOCKARR } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKSMOCKARR;

  constructor() { }

  ngOnInit(): void {
  }

}
