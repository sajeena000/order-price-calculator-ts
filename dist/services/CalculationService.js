import { PriceBreakdownModel } from '../models/PriceBreakdown.js';
import { DiscountModel } from '../models/Discount.js';
export class CalculationService {
    static async calculateOrderTotal(items, taxRate, discount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (items.length === 0) {
                        reject(new Error('No items in order'));
                        return;
                    }
                    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    const discountModel = new DiscountModel(discount.type, discount.value);
                    const discountError = discountModel.validate(subtotal);
                    if (discountError) {
                        reject(new Error(discountError));
                        return;
                    }
                    const discountAmount = discountModel.calculate(subtotal);
                    const taxableAmount = subtotal - discountAmount;
                    const taxAmount = (taxableAmount * taxRate) / 100;
                    const total = taxableAmount + taxAmount;
                    resolve(new PriceBreakdownModel(subtotal, discountAmount, taxableAmount, taxAmount, total));
                }
                catch (error) {
                    reject(error);
                }
            }, 500);
        });
    }
}
//# sourceMappingURL=CalculationService.js.map