export declare class DiscountModel {
    readonly type: 'percentage' | 'fixed';
    readonly value: number;
    constructor(type: 'percentage' | 'fixed', value: number);
    calculate(subtotal: number): number;
    validate(subtotal: number): string | null;
}
