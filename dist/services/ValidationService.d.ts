import type { ValidationResult } from '../types/index.js';
export declare class ValidationService {
    static validateItemInput(name: string, price: string, quantity: string): ValidationResult;
    static validateTaxRate(taxRate: number): string | null;
}
