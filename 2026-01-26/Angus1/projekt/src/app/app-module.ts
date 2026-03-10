import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { Rower1 } from './components/rower1/rower1';
import { Rower2 } from './components/rower2/rower2';
import { Rower3 } from './components/rower3/rower3';

@NgModule({
  declarations: [
    App,
    Menu,
    Rower1,
    Rower2,
    Rower3
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
