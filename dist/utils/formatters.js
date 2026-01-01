export class Formatters {
    static currency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }
    static percentage(value) {
        return `${value.toFixed(1)}%`;
    }
}
//# sourceMappingURL=formatters.js.map