import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {

  @Input() peli: object;
  imagePath: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  constructor() { }

  ngOnInit() {
  }

}
