import { Component } from '@angular/core';

@Component({
  selector: 'app-anim5',
  standalone: false,
  templateUrl: './anim5.html',
  styleUrl: './anim5.css',
})
export class Anim5 {
  name:string="anim5";
  effect:string="ramka";
  foto:string='foto3.jpg';

  anim:boolean=false;

  toggleZoom()
  {
    this.anim = !this.anim;
  }
}
