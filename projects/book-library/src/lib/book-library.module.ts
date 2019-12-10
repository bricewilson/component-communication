import { NgModule } from '@angular/core';
import { BookLibraryComponent } from './book-library.component';
import { FavBookComponent } from './fav-book/fav-book.component';

@NgModule({
  declarations: [BookLibraryComponent, FavBookComponent],
  imports: [
  ],
  exports: [BookLibraryComponent, FavBookComponent]
})
export class BookLibraryModule { }
