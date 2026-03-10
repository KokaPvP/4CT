import { Component } from '@angular/core';

@Component({
  selector: 'app-anim3',
  standalone: false,
  templateUrl: './anim3.html',
  styleUrl: './anim3.css',
})
export class Anim3 {
  name:string="anim3";
  effect:string="opacity";
  foto:string='foto3.jpg';

  opacity:boolean=false;

  toggleZoom()
  {
    this.opacity = !this.opacity;
  }
}
