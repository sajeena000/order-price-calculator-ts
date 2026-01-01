import type { OrderItem } from '../types/index.js';
import { Formatters } from '../utils/formatters.js';

export class ItemList {
  constructor(
    private container: HTMLElement,
    private items: OrderItem[],
    private onRemoveItem: (id: string) => void
  ) {
    this.render();
  }

  update(items: OrderItem[]): void {
    this.items = items;
    this.render();
  }

  private render(): void {
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

  private renderItem(item: OrderItem): string {
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

  private attachEventListeners(): void {
    this.container.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLButtonElement;
        const id = target.dataset.id!;
        this.onRemoveItem(id);
      });
    });
  }
}
