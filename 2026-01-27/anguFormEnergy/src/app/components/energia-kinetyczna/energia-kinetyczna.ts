import { Component } from '@angular/core';

@Component({
  selector: 'app-energia-kinetyczna',
  standalone: false,
  templateUrl: './energia-kinetyczna.html',
  styleUrl: './energia-kinetyczna.css',
})
export class EnergiaKinetyczna {
  title:string="EnergiaKinetyczna";
  licz(m:number,v:number):number{
    return m*v*v/2;
  }
}
