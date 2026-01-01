import type { OrderItem } from '../types/index.js';
import { ValidationService } from '../services/ValidationService.js';
import { OrderItemModel } from '../models/OrderItem.js';

export class OrderForm {
  private nameInput!: HTMLInputElement;
  private priceInput!: HTMLInputElement;
  private quantityInput!: HTMLInputElement;
  private addButton!: HTMLButtonElement;
  private errorContainer!: HTMLDivElement;

  constructor(
    private container: HTMLElement,
    private onAddItem: (item: OrderItem) => void
  ) {
    this.render();
    this.attachEventListeners();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="order-form">
        <h2>Add Item</h2>
        <div class="form-group">
          <input type="text" id="item-name" placeholder="Item name" />
          <input type="number" id="item-price" placeholder="Price" step="0.01" />
          <input type="number" id="item-quantity" placeholder="Quantity" value="1" />
          <button id="add-item-btn">Add Item</button>
        </div>
        <div id="form-errors" class="errors"></div>
      </div>
    `;

    this.nameInput = this.container.querySelector('#item-name')!;
    this.priceInput = this.container.querySelector('#item-price')!;
    this.quantityInput = this.container.querySelector('#item-quantity')!;
    this.addButton = this.container.querySelector('#add-item-btn')!;
    this.errorContainer = this.container.querySelector('#form-errors')!;
  }

  private attachEventListeners(): void {
    this.addButton.addEventListener('click', () => this.handleAddItem());
    
    [this.nameInput, this.priceInput, this.quantityInput].forEach(input => {
      input.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') this.handleAddItem();
      });
    });
  }

  private handleAddItem(): void {
    const validation = ValidationService.validateItemInput(
      this.nameInput.value,
      this.priceInput.value,
      this.quantityInput.value
    );

    if (!validation.isValid) {
      this.displayErrors(validation.errors);
      return;
    }

    const item = OrderItemModel.create(
      this.nameInput.value,
      parseFloat(this.priceInput.value),
      parseInt(this.quantityInput.value, 10)
    );

    this.onAddItem(item);
    this.clearForm();
  }

  private displayErrors(errors: Array<{ field: string; message: string }>): void {
    this.errorContainer.innerHTML = errors
      .map(err => `<div class="error">${err.field}: ${err.message}</div>`)
      .join('');
  }

  private clearForm(): void {
    this.nameInput.value = '';
    this.priceInput.value = '';
    this.quantityInput.value = '1';
    this.errorContainer.innerHTML = '';
  }
}