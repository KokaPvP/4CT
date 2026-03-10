import { Component } from '@angular/core';

@Component({
  selector: 'app-anim12',
  standalone: false,
  templateUrl: './anim12.html',
  styleUrl: './anim12.css',
})
export class Anim12 {
  name:string="anim12";
  effect:string="odwrót kolorów";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
