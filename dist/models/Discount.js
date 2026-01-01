export class DiscountModel {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    calculate(subtotal) {
        if (this.value <= 0)
            return 0;
        if (this.type === 'percentage') {
            return (subtotal * this.value) / 100;
        }
        return Math.min(this.value, subtotal);
    }
    validate(subtotal) {
        if (this.type === 'percentage' && (this.value < 0 || this.value > 100)) {
            return 'Percentage discount must be between 0 and 100';
        }
        if (this.type === 'fixed' && this.value > subtotal) {
            return 'Fixed discount cannot exceed subtotal';
        }
        return null;
    }
}
//# sourceMappingURL=Discount.js.map