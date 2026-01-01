export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
export interface Discount {
    type: 'percentage' | 'fixed';
    value: number;
}
export interface PriceBreakdown {
    subtotal: number;
    discount: number;
    taxableAmount: number;
    tax: number;
    total: number;
}
export interface CalculationError {
    field: string;
    message: string;
}
export interface ValidationResult {
    isValid: boolean;
    errors: CalculationError[];
}
