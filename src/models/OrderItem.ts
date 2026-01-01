export class OrderItemModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly quantity: number
  ) {}

  getTotal(): number {
    return this.price * this.quantity;
  }

  static create(name: string, price: number, quantity: number): OrderItemModel {
    return new OrderItemModel(
      Date.now().toString() + Math.random(),
      name,
      price,
      quantity
    );
  }
}