import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiKey: string = "e988e25a5b44ea6ca0329198f4427027";
  urlDatos: string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  datos: object;

  constructor(http: HttpClient) {
    console.log(this.urlDatos);
    http.get(this.urlDatos).subscribe( resultado => {
      console.log(resultado);
      this.datos = resultado["results"];
    });
    console.log(this.datos);
  }
}
