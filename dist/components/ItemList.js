import { Formatters } from '../utils/formatters.js';
export class ItemList {
    constructor(container, items, onRemoveItem) {
        this.container = container;
        this.items = items;
        this.onRemoveItem = onRemoveItem;
        this.render();
    }
    update(items) {
        this.items = items;
        this.render();
    }
    render() {
        if (this.items.length === 0) {
            this.container.innerHTML = '<p class="empty">No items added yet</p>';
            return;
        }
        this.container.innerHTML = `
      <div class="items-header"><h2>Order Items</h2></div>
      <ul class="item-list">
        ${this.items.map(item => this.renderItem(item)).join('')}
      </ul>
    `;
        this.attachEventListeners();
    }
    renderItem(item) {
        const total = item.price * item.quantity;
        return `
      <li class="item" data-id="${item.id}">
        <span class="item-name">${item.name}</span>
        <span class="item-details">
          ${Formatters.currency(item.price)} × ${item.quantity} = 
          ${Formatters.currency(total)}
        </span>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </li>
    `;
    }
    attachEventListeners() {
        this.container.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target;
                const id = target.dataset.id;
                this.onRemoveItem(id);
            });
        });
    }
}
//# sourceMappingURL=ItemList.js.map