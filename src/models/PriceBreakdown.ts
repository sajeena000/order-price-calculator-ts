import type { PriceBreakdown } from '../types/index.js';

export class PriceBreakdownModel implements PriceBreakdown {
  constructor(
    public readonly subtotal: number,
    public readonly discount: number,
    public readonly taxableAmount: number,
    public readonly tax: number,
    public readonly total: number
  ) {}

  static empty(): PriceBreakdownModel {
    return new PriceBreakdownModel(0, 0, 0, 0, 0);
  }
}