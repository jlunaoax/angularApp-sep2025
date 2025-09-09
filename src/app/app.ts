import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  title: string = 'Hello world from angular';

  subTitle: string = 'Counting state session';
  age: number = 34;
  users: string[] = ['Jose', 'Javier', 'Mar']
  //users!: string[];
  visible: boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!);
  }

  toggle() {
    this.visible = !this.visible;
  }

  setCounter(counter: number) {
    console.log(`Getting number ${counter}`);
    this.counter = counter;
  }
}
