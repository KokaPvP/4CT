import { Component } from '@angular/core';

@Component({
  selector: 'app-anim4',
  standalone: false,
  templateUrl: './anim4.html',
  styleUrl: './anim4.css',
})
export class Anim4 {
  name:string="anim4";
  effect:string="animacja";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
