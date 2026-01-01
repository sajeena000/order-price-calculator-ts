import type { PriceBreakdown } from '../types/index.js';
export declare class PriceDisplay {
    private container;
    constructor(container: HTMLElement);
    update(breakdown: PriceBreakdown | null, taxRate: number): void;
    displayError(message: string): void;
}
