export class ValidationService {
    static validateItemInput(name, price, quantity) {
        const errors = [];
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
    static validateTaxRate(taxRate) {
        if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
            return 'Tax rate must be between 0 and 100';
        }
        return null;
    }
}
//# sourceMappingURL=ValidationService.js.map