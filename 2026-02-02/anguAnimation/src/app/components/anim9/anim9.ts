import { Component } from '@angular/core';

@Component({
  selector: 'app-anim9',
  standalone: false,
  templateUrl: './anim9.html',
  styleUrl: './anim9.css',
})
export class Anim9 {
  name:string="anim9";
  effect:string="blur";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
