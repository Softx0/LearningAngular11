import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: string[] = ['Shirley', 'Poppy', 'Luna'];

  public sayHello() {
    alert('Hola mi amigo!');
  }

  public deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {

        //practicando los metodos de array de js | splice: cual y cuantos
        this.users.splice(i, 1);
      }
    }
  }
}
