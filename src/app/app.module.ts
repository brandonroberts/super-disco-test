import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appReducer }),
    EffectsModule.forRoot([ AppEffects ])
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
