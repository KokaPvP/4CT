import { Component } from '@angular/core';
import { OpisRoweru } from '../rower1/rower1';

@Component({
  selector: 'app-rower3',
  standalone: false,
  templateUrl: './rower3.html',
  styleUrl: './rower3.css',
})
export class Rower3 {
  opis: OpisRoweru;
    constructor()
    {
      this.opis = {
        kierownica: false,
        siedzenie: false,
        hamulce: 0,
        przerzutki: 1,
        kolor: "czarno-czerwony",
        foto: 'assets/foto3.jpg'
      }
    }
}
