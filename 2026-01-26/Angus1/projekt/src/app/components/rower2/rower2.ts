import { Component } from '@angular/core';
import { OpisRoweru } from '../rower1/rower1';

@Component({
  selector: 'app-rower2',
  standalone: false,
  templateUrl: './rower2.html',
  styleUrl: './rower2.css',
})
export class Rower2 {
  opis: OpisRoweru;
  constructor()
  {
    this.opis = {
      kierownica: true,
      siedzenie: true,
      hamulce: 2,
      przerzutki: 7,
      kolor: "niebieski",
      foto: 'assets/foto2.jpg'
    }
  }
}
