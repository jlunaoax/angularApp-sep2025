import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Hello world from angular';
  age: number = 34;
  users: string[] = ['Jose', 'Javier', 'Mar']
  //users!: string[];
  visible: boolean = false;
}
