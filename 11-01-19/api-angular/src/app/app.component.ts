import { Component } from '@angular/core';
import { GetPeliculasService } from './get-peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  datos: Array<object>;
  datosTrending: Array<object>;
  trending: boolean = false;

  constructor(private api: GetPeliculasService) {
    this.api.popularMovies().then((resultado) => this.datos = resultado["results"]);
    this.api.trendingMovies().then((resultado) => this.datosTrending = resultado["results"]);
  }
}
