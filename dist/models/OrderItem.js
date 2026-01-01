export class OrderItemModel {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotal() {
        return this.price * this.quantity;
    }
    static create(name, price, quantity) {
        return new OrderItemModel(Date.now().toString() + Math.random(), name, price, quantity);
    }
}
//# sourceMappingURL=OrderItem.js.map