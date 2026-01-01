export class Formatters {
  static currency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  static percentage(value: number): string {
    return `${value.toFixed(1)}%`;
  }
}