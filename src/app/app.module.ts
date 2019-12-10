import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksModule } from './books/books.module';
import { BookLibraryModule } from 'book-library';
import { ReadersModule } from './readers/readers.module';
import { SharedModule } from './shared/shared.module';
import { ReaderLibraryModule } from 'reader-library';
import { LibraryComponent } from './library/library.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LibraryComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    BookLibraryModule,
    ReadersModule,
    SharedModule,
    ReaderLibraryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
