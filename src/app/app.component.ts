import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "Jhon Carter";
  age: number = 3;
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

  addUser(newUser: any){
    this.users.push(newUser);
    newUser.value = "";
    // newUser.focus();
    //cancele el evento de resetear la pag
    return false;
  }
}
