import { Component } from '@angular/core';

@Component({
  selector: 'app-anim11',
  standalone: false,
  templateUrl: './anim11.html',
  styleUrl: './anim11.css',
})
export class Anim11 {
  name:string="anim11";
  effect:string="szarosc";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
