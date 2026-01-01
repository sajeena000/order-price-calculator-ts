export class PriceBreakdownModel {
    constructor(subtotal, discount, taxableAmount, tax, total) {
        this.subtotal = subtotal;
        this.discount = discount;
        this.taxableAmount = taxableAmount;
        this.tax = tax;
        this.total = total;
    }
    static empty() {
        return new PriceBreakdownModel(0, 0, 0, 0, 0);
    }
}
//# sourceMappingURL=PriceBreakdown.js.map