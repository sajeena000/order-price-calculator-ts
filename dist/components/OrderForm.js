import { ValidationService } from '../services/ValidationService.js';
import { OrderItemModel } from '../models/OrderItem.js';
export class OrderForm {
    constructor(container, onAddItem) {
        this.container = container;
        this.onAddItem = onAddItem;
        this.render();
        this.attachEventListeners();
    }
    render() {
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
        this.nameInput = this.container.querySelector('#item-name');
        this.priceInput = this.container.querySelector('#item-price');
        this.quantityInput = this.container.querySelector('#item-quantity');
        this.addButton = this.container.querySelector('#add-item-btn');
        this.errorContainer = this.container.querySelector('#form-errors');
    }
    attachEventListeners() {
        this.addButton.addEventListener('click', () => this.handleAddItem());
        [this.nameInput, this.priceInput, this.quantityInput].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter')
                    this.handleAddItem();
            });
        });
    }
    handleAddItem() {
        const validation = ValidationService.validateItemInput(this.nameInput.value, this.priceInput.value, this.quantityInput.value);
        if (!validation.isValid) {
            this.displayErrors(validation.errors);
            return;
        }
        const item = OrderItemModel.create(this.nameInput.value, parseFloat(this.priceInput.value), parseInt(this.quantityInput.value, 10));
        this.onAddItem(item);
        this.clearForm();
    }
    displayErrors(errors) {
        this.errorContainer.innerHTML = errors
            .map(err => `<div class="error">${err.field}: ${err.message}</div>`)
            .join('');
    }
    clearForm() {
        this.nameInput.value = '';
        this.priceInput.value = '';
        this.quantityInput.value = '1';
        this.errorContainer.innerHTML = '';
    }
}
//# sourceMappingURL=OrderForm.js.map