import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnInit {
  
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmit: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    this.counter = this.loadVariable();
  }

  increment() {
    this.counter++;
    this.saveVariable(this.counter);
  }

  decrement() {
    this.counter--;
    this.saveVariable(this.counter);
  }

  saveVariable(value: number) {
    this.counterEmit.emit(this.counter);
    console.log(`Emmitting number ${this.counter}`);
    sessionStorage.setItem('counter', value.toString());
  }

  loadVariable(): number {
    const value = sessionStorage.getItem('counter');
    return value ? parseInt(value) : 0;
  }  
}
