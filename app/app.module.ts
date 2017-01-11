import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile.component';
import { AboutComponent }  from './components/about.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, ProfileComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
