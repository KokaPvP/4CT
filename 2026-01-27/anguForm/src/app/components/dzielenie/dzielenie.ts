import { Component } from '@angular/core';

@Component({
  selector: 'app-dzielenie',
  standalone: false,
  templateUrl: './dzielenie.html',
  styleUrl: './dzielenie.css',
})
export class Dzielenie {
  title:string="Dzielenie";
  dzielenie(a:number,b:number):number
  {
    if(b!=0) return a/b;
    return 0;
  }
}
