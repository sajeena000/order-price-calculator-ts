import { Formatters } from '../utils/formatters.js';
export class PriceDisplay {
    constructor(container) {
        this.container = container;
    }
    update(breakdown, taxRate) {
        if (!breakdown) {
            this.container.innerHTML = '';
            return;
        }
        this.container.innerHTML = `
      <div class="price-breakdown">
        <h2>Price Breakdown</h2>
        <div class="breakdown-row">
          <span>Subtotal:</span>
          <span>${Formatters.currency(breakdown.subtotal)}</span>
        </div>
        ${breakdown.discount > 0 ? `
          <div class="breakdown-row discount">
            <span>Discount:</span>
            <span>-${Formatters.currency(breakdown.discount)}</span>
          </div>
        ` : ''}
        <div class="breakdown-row">
          <span>Taxable Amount:</span>
          <span>${Formatters.currency(breakdown.taxableAmount)}</span>
        </div>
        <div class="breakdown-row">
          <span>Tax (${Formatters.percentage(taxRate)}):</span>
          <span>${Formatters.currency(breakdown.tax)}</span>
        </div>
        <div class="breakdown-row total">
          <span><strong>Total:</strong></span>
          <span><strong>${Formatters.currency(breakdown.total)}</strong></span>
        </div>
      </div>
    `;
    }
    displayError(message) {
        this.container.innerHTML = `
      <div class="error-message">
        <strong>Error:</strong> ${message}
      </div>
    `;
    }
}
//# sourceMappingURL=PriceDisplay.js.map