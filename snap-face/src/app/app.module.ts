import { DatePipe } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

//add location france

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { SnapListComponent } from './snap-list/snap-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SnapListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'fr-FR'
  }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
