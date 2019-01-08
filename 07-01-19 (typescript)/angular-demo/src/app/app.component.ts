import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  nombres = ["Edu", "Juan", "Paco", "Lou"];
  esMayor4 = (num: Number) => {
    return num > 4;
  };
}
