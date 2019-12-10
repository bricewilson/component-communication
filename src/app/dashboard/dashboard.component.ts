import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Book } from "src/app/models/book";
import { Reader } from "src/app/models/reader";
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
import { logEagerReaders } from '../core/book_tracker_operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;
  readerSubscription: Subscription;

  constructor(private dataService: DataService,
              private title: Title) { }
  
  ngOnInit() {

    this.allBooks = this.dataService.getAllBooks();

    this.readerSubscription = this.dataService.getAllReaders()
	    .pipe(
	      logEagerReaders(200)
	    )
	    .subscribe(
	      readers => this.allReaders = readers
      );

    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker`);
  }

  ngOnDestroy(): void {
    this.readerSubscription.unsubscribe();
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID)
      .subscribe(
        (data: void) => {
          let index: number = this.allBooks.findIndex(book => book.bookID === bookID);
          this.allBooks.splice(index, 1);
        },
        (err: any) => console.log(err)
      );
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
