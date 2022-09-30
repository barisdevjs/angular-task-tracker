import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // '../../Task'
import { TaskService } from 'src/app/services/task.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }  

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (
      this.tasks = tasks
    ))
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    if ( task.reminder === false ) {
      Swal.fire({
        title:'Deactivated',
        text:'I am not sure',
        icon:'question',
      })
    } else {
      Swal.fire({
        title:'Activated',
        text:'Go for it',
        icon:'info',
      }) 
    }
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ))
  }
}
