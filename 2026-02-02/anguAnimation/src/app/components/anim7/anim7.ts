import { Component } from '@angular/core';

@Component({
  selector: 'app-anim7',
  standalone: false,
  templateUrl: './anim7.html',
  styleUrl: './anim7.css',
})
export class Anim7 {
  name:string="anim7";
  effect:string="obrót";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
