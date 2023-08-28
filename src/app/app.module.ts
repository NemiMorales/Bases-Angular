import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/couter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DsnModule } from './dsn/dsn.module';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './gifs/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    SidebarComponent,
    HomeComponent,

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
