import { Component, OnInit } from '@angular/core';
import { Facesnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

  title: any;


  ngOnInit(): void {

    //  this.mysnap = new Facesnap(
    //   'Bulbizarre',
    //   'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    //   "Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. Ce dernier lui sert également d'organe de stockage, puisqu’on rapporte notamment qu’en période de sécheresse, il peut survivre plusieurs jours sans manger grâce à l’énergie qui y est accumulée. Il a des taches foncées sur le corps faisant penser à un batracien. Son bulbe grandit en permanence en absorbant les rayons du soleil, et lorsque le poids du bulbe sera trop grand et empêchera Bulbizarre de se dresser sur ses deux pattes arrière, cela signifiera que son évolution en Herbizarre est proche.",
    //    new Date(),
    //    0,
    //    "Cannes"
    // );
    // this.twosnap = new Facesnap(
    //   "Salamèche",
    //   "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    //   "Salamèche est un Pokémon bipède et reptilien avec un corps orange tandis que son ventre et la plante de ses pieds sont beiges. Ses bras et ses jambes sont courts, avec respectivement quatre doigts et trois griffes chacune. Une flamme brûle au bout de la svelte queue de Salamèche, et elle flamboie depuis sa naissance. ",
    //   new Date(),
    //   0,
    //   "Paris"
    // );
    // this.treesnap = new Facesnap(
    //   "Carapuce",
    //   "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    //   "Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace brune au pourtour blanc, beige au niveau du ventre. Ses yeux sont grands et violacés. Il a une queue enroulée sur elle-même formant une spirale. Il possède quatre pattes avec chacune trois doigts. Sa carapace, molle à la naissance, durcit avec le temps et lui sert à se protéger pour lancer ensuite des jets d'eau ou d'écume, mais aussi à améliorer son hydrodynamisme.",
    //   new Date(),
    //   0
    // )
  }
}
