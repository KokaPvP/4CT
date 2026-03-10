import { Component } from '@angular/core';

@Component({
  selector: 'app-anim8',
  standalone: false,
  templateUrl: './anim8.html',
  styleUrl: './anim8.css',
})
export class Anim8 {
  name:string="anim8";
  effect:string="cien";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
