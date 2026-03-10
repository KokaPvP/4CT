import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EnergiaKinetyczna } from './components/energia-kinetyczna/energia-kinetyczna';
import { EnergiaPotencjalna } from './components/energia-potencjalna/energia-potencjalna';

@NgModule({
  declarations: [
    App,
    EnergiaKinetyczna,
    EnergiaPotencjalna
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
