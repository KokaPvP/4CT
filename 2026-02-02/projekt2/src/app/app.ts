import { Component, signal, OnInit } from '@angular/core';
import { User } from './user';
import { IUser } from './Iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('projekt2');

  users:IUser[]=[];

  constructor(private userService: User)
  {

  }

  ngOnInit():void
  {
    this.userService.getUsers().subscribe(users=>{this.users = users})
  }
}
