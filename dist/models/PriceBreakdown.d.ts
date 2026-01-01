import type { PriceBreakdown } from '../types/index.js';
export declare class PriceBreakdownModel implements PriceBreakdown {
    readonly subtotal: number;
    readonly discount: number;
    readonly taxableAmount: number;
    readonly tax: number;
    readonly total: number;
    constructor(subtotal: number, discount: number, taxableAmount: number, tax: number, total: number);
    static empty(): PriceBreakdownModel;
}
