import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { ChildEventListComponent } from './childevent/childevent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    ChildEventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
