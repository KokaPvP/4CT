import { Component } from '@angular/core';

@Component({
  selector: 'app-anim1',
  standalone: false,
  templateUrl: './anim1.html',
  styleUrl: './anim1.css',
})
export class Anim1 {
  name:string="anim1";
  effect:string="move";
  foto:string='foto1.jpg';

  move:boolean=false;

  toggleZoom()
  {
    this.move = !this.move;
  }
}
