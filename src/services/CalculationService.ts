import type { OrderItem, Discount, PriceBreakdown } from '../types/index.js';
import { PriceBreakdownModel } from '../models/PriceBreakdown.js';
import { DiscountModel } from '../models/Discount.js';

export class CalculationService {
  static async calculateOrderTotal(
    items: OrderItem[],
    taxRate: number,
    discount: Discount
  ): Promise<PriceBreakdown> {
    return new Promise<PriceBreakdown>((resolve, reject) => {
      setTimeout(() => {
        try {
          if (items.length === 0) {
            reject(new Error('No items in order'));
            return;
          }

          const subtotal: number = items.reduce(
            (sum: number, item: OrderItem) => sum + (item.price * item.quantity),
            0
          );

          const discountModel = new DiscountModel(discount.type, discount.value);
          const discountError = discountModel.validate(subtotal);
          
          if (discountError) {
            reject(new Error(discountError));
            return;
          }

          const discountAmount: number = discountModel.calculate(subtotal);
          const taxableAmount: number = subtotal - discountAmount;
          const taxAmount: number = (taxableAmount * taxRate) / 100;
          const total: number = taxableAmount + taxAmount;

          resolve(
            new PriceBreakdownModel(
              subtotal,
              discountAmount,
              taxableAmount,
              taxAmount,
              total
            )
          );
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  }
}