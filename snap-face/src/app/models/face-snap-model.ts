export class Facesnap {
title!: string;
  description!: string;
  date!: Date;
  snap!: number;
  imgUrl!: string; 

  constructor(title: string, description: string, date: Date, snap: number, imgUrl: string) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.snap = snap;
    this.imgUrl = imgUrl;
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