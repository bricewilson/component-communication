import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-library',
  template: `
    <p>
      Hello shared library!
    </p>
  `,
  styles: []
})
export class BookLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
