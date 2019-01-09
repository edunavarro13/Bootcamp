import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToEurosPipe } from './to-euros.pipe';
import { HeaderAngularComponent } from './header-angular/header-angular.component';

import { FormsModule } from '@angular/forms'; // Para usar ngModel

@NgModule({
  declarations: [
    AppComponent,
    ToEurosPipe,
    HeaderAngularComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
