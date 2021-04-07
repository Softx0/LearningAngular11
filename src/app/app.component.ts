import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngularCourse11';
  users: Array<String> = ['Ryan', 'Shirley', 'Emmanuel', 'Luna', 'Poppy'];
  banderita: boolean = false;

  name: string = 'John Doe';
  age: number = 0;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: '2218 Backer St',
      city: 'London'
    };
    this.hobbies = ['swimming', 'read', 'write'];
  }

  

}
