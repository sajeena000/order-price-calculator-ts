import type { OrderItem, Discount, PriceBreakdown } from '../types/index.js';
export declare class CalculationService {
    static calculateOrderTotal(items: OrderItem[], taxRate: number, discount: Discount): Promise<PriceBreakdown>;
}
