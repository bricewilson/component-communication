import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  branchName: string = '<branch name>';

  constructor() { }

  ngOnInit() {
  }

  increaseInventory(amount: string) {
    
  }

}
