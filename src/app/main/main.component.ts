import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  items = [
    { id: 1, item: 'Product A', price: 20.0, quantity: 2, discount: 5.0 },
    { id: 2, item: 'Product B', price: 15.0, quantity: 3, discount: 3.0 },
  ];

  searchText: string = '';
  isAddingItem: boolean = false;

  // Function to add a new item
  addItem() {
    this.isAddingItem = true;
  }

  // Function to save the new item
  saveItem(newItemForm: any) {
    if (newItemForm.valid) {
      const newItem = {
        id: this.items.length + 1,
        item: newItemForm.value.item,
        price: parseFloat(newItemForm.value.price),
        quantity: parseInt(newItemForm.value.quantity),
        discount: parseFloat(newItemForm.value.discount),
      };
      this.items.push(newItem);
      this.isAddingItem = false;
    }
  }

  // Function to cancel adding a new item
  cancelAddItem() {
    this.isAddingItem = false;
  }

  // Function to delete an item by ID
  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // Function to search items
  searchItems() {
    this.items = this.items.filter((item) =>
      item.item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Reset search and show all items
  resetSearch() {
    this.searchText = '';
    // Reload your original data here or implement a way to reset to the original data
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += item.price * item.quantity - item.discount;
    }
    return subtotal;
  }

  calculateTax(): number {
    // Assuming a tax rate of 8%
    return this.calculateSubtotal() * 0.08;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.calculateTax();
  }
}
