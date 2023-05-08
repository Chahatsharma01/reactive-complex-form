import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyformComponent } from './myform/myform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
