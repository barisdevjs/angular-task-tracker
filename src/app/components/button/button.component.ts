import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  onClick(): void {
    this.btnClick.emit();
  }
}
