import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nudny } from './components/nudny/nudny';
import { Normalny } from './components/normalny/normalny';
import { Zarabisty } from './components/zarabisty/zarabisty';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align: center;" class="content">
    {{title}}
    <hr>
    <b>{{autor}}</b>
    <app-nudny></app-nudny>
    <app-normalny></app-normalny>
    <app-zarabisty></app-zarabisty>
  </div>
  `,
  imports: [Nudny,Normalny,Zarabisty]
})
export class App {
  title = 'Jacy są Nauczyciele';
  autor = 'Dorian szaleje';
}
