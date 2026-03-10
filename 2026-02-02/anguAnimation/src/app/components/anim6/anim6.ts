import { Component } from '@angular/core';

@Component({
  selector: 'app-anim6',
  standalone: false,
  templateUrl: './anim6.html',
  styleUrl: './anim6.css',
})
export class Anim6 {
  name:string="anim6";
  effect:string="kreski";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
