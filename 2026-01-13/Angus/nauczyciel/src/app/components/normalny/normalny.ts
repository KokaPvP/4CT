import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-normalny',
  imports: [CommonModule],
  templateUrl: './normalny.html',
  styleUrl: './normalny.css',
})
export class Normalny {
  opisy: Opis[];

  constructor()
  {
    this.opisy = [
      {imie:'Jan',nazwisko:"Waliczek",wiek:18,przedmiot:"matma",foto:"assets/photo1.png"}
    ];
  }
}

class Opis{
  imie!: string;
  nazwisko!:string;
  wiek!:number;
  przedmiot!:string;
  foto!:string;
}