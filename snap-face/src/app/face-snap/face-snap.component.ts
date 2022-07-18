import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  date!: Date;
  snap!: number;
  imgUrl!: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Bulbizarre';
    this.imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
    this.description = 'Bulbizarre est une espèce de Pokémon de type Herbe/Poison !';
    this.date = new Date();
    this.snap = 6;
  }

}
