import type { OrderItem } from '../types/index.js';
export declare class ItemList {
    private container;
    private items;
    private onRemoveItem;
    constructor(container: HTMLElement, items: OrderItem[], onRemoveItem: (id: string) => void);
    update(items: OrderItem[]): void;
    private render;
    private renderItem;
    private attachEventListeners;
}
