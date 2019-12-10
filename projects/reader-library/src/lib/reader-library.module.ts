import { NgModule } from '@angular/core';
import { ReaderLibraryComponent } from './reader-library.component';
import { ReaderStatsComponent } from './reader-stats/reader-stats.component';

@NgModule({
  declarations: [ReaderLibraryComponent, ReaderStatsComponent],
  imports: [
  ],
  exports: [ReaderLibraryComponent, ReaderStatsComponent]
})
export class ReaderLibraryModule { }
