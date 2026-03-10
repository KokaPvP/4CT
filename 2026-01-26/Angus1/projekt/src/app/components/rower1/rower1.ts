import { Component } from '@angular/core';

@Component({
  selector: 'app-rower1',
  standalone: false,
  templateUrl: './rower1.html',
  styleUrl: './rower1.css',
})
export class Rower1 {
  opis: OpisRoweru;
  constructor()
  {
    this.opis = {
      kierownica: true,
      siedzenie: false,
      hamulce: 3,
      przerzutki: 4,
      kolor: "żółty",
      foto: 'assets/foto1.jpg'
    }
  }
}

export class OpisRoweru{
  kierownica!:boolean;
  siedzenie!:boolean;
  hamulce!: number;
  przerzutki!: number;
  kolor!: string;
  foto!: string;
}
