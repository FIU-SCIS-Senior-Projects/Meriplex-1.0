import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdCardModule, MdAutocompleteModule, MdInputModule, MdButtonModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MplxLoginComponent } from './mplx-login/mplx-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MplxLoginComponent
  ],
  imports: [
    BrowserModule, 
    MdCardModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
