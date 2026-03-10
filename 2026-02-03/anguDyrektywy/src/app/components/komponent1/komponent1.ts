import { Component } from '@angular/core';

@Component({
  selector: 'app-komponent1',
  standalone: false,
  templateUrl: './komponent1.html',
  styleUrl: './komponent1.css',
})
export class Komponent1 {
  isActive:boolean=false;
}
