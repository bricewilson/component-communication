import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventorySource = new Subject<number>();

  inventory$ = this.inventorySource.asObservable();
  
  constructor() { }

  addInventory(amount: number) {
    console.log('Producing new amount.');
    this.inventorySource.next(amount);
  }
}