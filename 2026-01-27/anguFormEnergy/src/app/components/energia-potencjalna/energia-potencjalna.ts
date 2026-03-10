import { Component } from '@angular/core';

@Component({
  selector: 'app-energia-potencjalna',
  standalone: false,
  templateUrl: './energia-potencjalna.html',
  styleUrl: './energia-potencjalna.css',
})
export class EnergiaPotencjalna {
  title:string="EnergiaPotencjalna";
  licz(m:number,h:number):number{
    return m*9.98*h;
  }
}
