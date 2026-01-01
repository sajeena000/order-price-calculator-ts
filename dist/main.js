import { OrderForm } from './components/OrderForm.js';
import { ItemList } from './components/ItemList.js';
import { PriceDisplay } from './components/PriceDisplay.js';
import { CalculationService } from './services/CalculationService.js';
class OrderPriceCalculatorApp {
    constructor() {
        this.items = [];
        this.taxRate = 8.5;
        this.discount = { type: 'percentage', value: 0 };
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        }
        else {
            this.initialize();
        }
    }
    initialize() {
        console.log('Initializing app...');
        const formContainer = document.getElementById('order-form-container');
        const itemsContainer = document.getElementById('items-container');
        const priceContainer = document.getElementById('price-container');
        if (!formContainer || !itemsContainer || !priceContainer) {
            console.error('Required containers not found in DOM');
            return;
        }
        console.log('Containers found, creating components...');
        this.orderForm = new OrderForm(formContainer, (item) => this.addItem(item));
        this.itemList = new ItemList(itemsContainer, this.items, (id) => this.removeItem(id));
        this.priceDisplay = new PriceDisplay(priceContainer);
        this.attachCalculateButton();
        this.attachTaxAndDiscountControls();
        console.log('App initialized successfully');
    }
    addItem(item) {
        console.log('Adding item:', item);
        this.items.push(item);
        this.itemList.update(this.items);
    }
    removeItem(id) {
        console.log('Removing item:', id);
        this.items = this.items.filter(item => item.id !== id);
        this.itemList.update(this.items);
    }
    attachCalculateButton() {
        const calculateBtn = document.getElementById('calculate-btn');
        if (!calculateBtn) {
            console.error('Calculate button not found');
            return;
        }
        calculateBtn.addEventListener('click', () => this.calculateTotal());
    }
    attachTaxAndDiscountControls() {
        const taxInput = document.getElementById('tax-rate');
        const discountTypeSelect = document.getElementById('discount-type');
        const discountValueInput = document.getElementById('discount-value');
        if (taxInput) {
            taxInput.addEventListener('change', () => {
                this.taxRate = parseFloat(taxInput.value) || 0;
                console.log('Tax rate updated:', this.taxRate);
            });
        }
        if (discountTypeSelect) {
            discountTypeSelect.addEventListener('change', () => {
                this.discount.type = discountTypeSelect.value;
                console.log('Discount type updated:', this.discount.type);
            });
        }
        if (discountValueInput) {
            discountValueInput.addEventListener('change', () => {
                this.discount.value = parseFloat(discountValueInput.value) || 0;
                console.log('Discount value updated:', this.discount.value);
            });
        }
    }
    async calculateTotal() {
        console.log('Calculating total...');
        try {
            const breakdown = await CalculationService.calculateOrderTotal(this.items, this.taxRate, this.discount);
            console.log('Calculation successful:', breakdown);
            this.priceDisplay.update(breakdown, this.taxRate);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Calculation failed';
            console.error('Calculation error:', message);
            this.priceDisplay.displayError(message);
        }
    }
}
new OrderPriceCalculatorApp();
//# sourceMappingURL=main.js.map