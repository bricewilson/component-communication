import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReadersRoutingModule } from './readers-routing.module';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';

@NgModule({
  declarations: [
    AddReaderComponent,
    EditReaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadersRoutingModule
  ]
})
export class ReadersModule { }
