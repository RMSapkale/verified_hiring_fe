import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { EducationDetailsComponent } from './education-details/education-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
