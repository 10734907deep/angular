import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Other modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }