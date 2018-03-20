import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // UserService,
    // { provide: APP_CONFIG, useValue: EVENT_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
