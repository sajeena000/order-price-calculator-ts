import type { CalculationError, ValidationResult } from '../types/index.js';

export class ValidationService {
  static validateItemInput(
    name: string,
    price: string,
    quantity: string
  ): ValidationResult {
    const errors: CalculationError[] = [];

    if (!name.trim()) {
      errors.push({ field: 'name', message: 'Item name is required' });
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      errors.push({ field: 'price', message: 'Price must be a positive number' });
    }

    const qtyNum = parseInt(quantity, 10);
    if (isNaN(qtyNum) || qtyNum <= 0 || !Number.isInteger(qtyNum)) {
      errors.push({ 
        field: 'quantity', 
        message: 'Quantity must be a positive integer' 
      });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateTaxRate(taxRate: number): string | null {
    if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
      return 'Tax rate must be between 0 and 100';
    }
    return null;
  }
}