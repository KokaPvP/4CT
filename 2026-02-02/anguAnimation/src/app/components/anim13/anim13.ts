import { Component } from '@angular/core';

@Component({
  selector: 'app-anim13',
  standalone: false,
  templateUrl: './anim13.html',
  styleUrl: './anim13.css',
})
export class Anim13 {
  name:string="anim13";
  effect:string="zmiana koloru";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
