export declare class OrderItemModel {
    readonly id: string;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    constructor(id: string, name: string, price: number, quantity: number);
    getTotal(): number;
    static create(name: string, price: number, quantity: number): OrderItemModel;
}
