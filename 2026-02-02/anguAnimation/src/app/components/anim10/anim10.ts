import { Component } from '@angular/core';

@Component({
  selector: 'app-anim10',
  standalone: false,
  templateUrl: './anim10.html',
  styleUrl: './anim10.css',
})
export class Anim10 {
  name:string="anim10";
  effect:string="jasność";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
