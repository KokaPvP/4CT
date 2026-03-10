import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Anim1 } from './components/anim1/anim1';
import { Anim2 } from './components/anim2/anim2';
import { Anim3 } from './components/anim3/anim3';
import { Anim4 } from './components/anim4/anim4';
import { Anim5 } from './components/anim5/anim5';
import { Anim6 } from './components/anim6/anim6';
import { Anim7 } from './components/anim7/anim7';
import { Anim8 } from './components/anim8/anim8';
import { Anim9 } from './components/anim9/anim9';
import { Anim10 } from './components/anim10/anim10';
import { Anim11 } from './components/anim11/anim11';
import { Anim12 } from './components/anim12/anim12';
import { Anim13 } from './components/anim13/anim13';

@NgModule({
  declarations: [
    App,
    Start,
    Anim1,
    Anim2,
    Anim3,
    Anim4,
    Anim5,
    Anim6,
    Anim7,
    Anim8,
    Anim9,
    Anim10,
    Anim11,
    Anim12,
    Anim13
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
