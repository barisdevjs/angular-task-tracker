import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {


  @Input() task: Task = { id : 33 , text: '',day:'',reminder:true}
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter
  constructor() { }
  
  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);  
  } 

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }

}
