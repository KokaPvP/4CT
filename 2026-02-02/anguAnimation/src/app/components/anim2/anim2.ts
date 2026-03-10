import { Component } from '@angular/core';

@Component({
  selector: 'app-anim2',
  standalone: false,
  templateUrl: './anim2.html',
  styleUrl: './anim2.css',
})
export class Anim2 {
  name:string="anim2";
  effect:string="zoom";
  foto:string='foto2.jpg';

  zoom:boolean=false;

  toggleZoom()
  {
    this.zoom = !this.zoom;
  }
}
