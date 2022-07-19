import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Facesnap } from '../models/face-snap-model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  @Input () facesnap!: Facesnap;

  // title!: string;
  // description!: string;
  // date!: Date;
  // snap!: number;
  // imgUrl!: string; 
  buttonText!: string;
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    // this.title = 'Bulbizarre';
    // this.imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
    // this.description = 'Bulbizarre est une espèce de Pokémon de type Herbe/Poison !';
    // this.date = new Date();
    // this.snap = 6;
   
    this.buttonText = 'Oh Snap';
  }

  Addsnap() {
    if (this.buttonText === 'Oh Snap')
    {
      this.facesnap.snap++;
      this.buttonText = 'Non Snap'
    }
    else {
      this.facesnap.snap--;
      this.buttonText ='Oh Snap'
    }
  }

  

}
