import type { OrderItem } from '../types/index.js';
export declare class OrderForm {
    private container;
    private onAddItem;
    private nameInput;
    private priceInput;
    private quantityInput;
    private addButton;
    private errorContainer;
    constructor(container: HTMLElement, onAddItem: (item: OrderItem) => void);
    private render;
    private attachEventListeners;
    private handleAddItem;
    private displayErrors;
    private clearForm;
}
