export class Facesnap {
  title!: string;
  imgUrl!: string;
  description!: string;
  date!: Date; 
  snap!: number;

  constructor(title: string, imgUrl: string, description: string, date: Date, snap: number ) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.date = date;
    this.snap = snap;
    
   
   }

}

/*
il ya une maniere plus simple il faur ajouter le modificateur public 

export class Facesnap {
    constructor(public title: string, 
        public description: string, 
        public date: Date, 
        piblic snap: number, 
        public imgUrl: string)
    {

    }
}
*/