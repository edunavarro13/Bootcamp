import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-demo';
  nombres: Array<string> = ["Edu", "Juan", "Paco", "Lou"];
  valor: boolean = true;
  texto: string;
  esMayor4 = (num: Number) => {
    return num > 4;
  };
  cambiarValor = () => {
    if (this.valor) {
      this.valor = false;
    } else {
      this.valor = true;
    }
  };
  noVacio = (text: string) => {
    return text != undefined && text.length > 0;
  }
}
