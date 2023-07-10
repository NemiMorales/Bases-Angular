import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/couter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DsnModule } from './dsn/dsn.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DsnModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
