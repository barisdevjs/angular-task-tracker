import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { UiService} from '../../services/ui.service';
import { Subscription} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id : number = 0
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showReminder: boolean = false;
  subscription: Subscription = new Subscription();
  showTask: boolean = false;

  constructor( private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value: any) => {
      this.showTask = value
    })
   }

  ngOnInit(): void {
    
  }

  randomNumber() : number {
    return Math.floor(Math.random() * 10000)
  }

  onSubmit() {
    if (!this.text) {
      Swal.fire({
        title:'I won\'t let you do this',
        text:'Don\'t forget to add a task',
        icon:'warning',
      })
      return;
    }

    const newTask = {
      id : this.randomNumber(),
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    // emit event

    this.onAddTask.emit(newTask);


    // clearing the input area
    this.id = 0;
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
  
}