# Order Price Calculator

A fully-typed TypeScript application for calculating order totals with tax and discounts. Built with clean architecture, async logic, and proper error handling.

## Features

- **Item Management** - Add/remove items with price and quantity
- **Tax Calculation** - Configurable tax rate (default 8.5%)
- **Discount Support** - Percentage or fixed amount discounts
- **Async Operations** - Promise-based calculation with error handling
- **Full TypeScript** - Strict typing throughout the application
- **Modern UI** - Professional, responsive design

## Requirements

- Node.js (v14 or higher)
- TypeScript 5.3+
- Modern web browser

## Quick Start

```bash
# Clone or download the project
cd order-price-calculator-ts

# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Start local server
npx http-server -p 8080

# Open in browser
# Navigate to http://localhost:8080/src/
```

## Project Structure

```
order-price-calculator-ts/
├── src/
│   ├── types/           # TypeScript interfaces
│   ├── models/          # Business logic classes
│   ├── services/        # Calculation & validation services
│   ├── utils/           # Helper functions
│   ├── components/      # UI components
│   ├── main.ts          # Application entry point
│   ├── index.html       # HTML template
│   └── styles.css       # Styling
├── dist/                # Compiled JavaScript (generated)
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Key Technologies

- **TypeScript** - Strict typing and type safety
- **ES6 Modules** - Modern JavaScript module system
- **Promises/Async** - Asynchronous calculation logic
- **DOM Manipulation** - No framework dependencies
- **CSS3** - Modern gradients and animations

## Usage Example

1. **Add Items**: Enter item name, price, and quantity
2. **Set Tax Rate**: Adjust the tax percentage (default 8.5%)
3. **Apply Discount**: Choose percentage or fixed amount
4. **Calculate**: Click "Calculate Total" to see breakdown

## Architecture

### Types (`src/types/`)
- Interfaces for `OrderItem`, `Discount`, `PriceBreakdown`
- Type definitions for validation results

### Models (`src/models/`)
- `OrderItemModel` - Item creation and calculations
- `DiscountModel` - Discount validation and application
- `PriceBreakdownModel` - Result structure

### Services (`src/services/`)
- `CalculationService` - Async price calculations
- `ValidationService` - Input validation logic

### Components (`src/components/`)
- `OrderForm` - Add item form with validation
- `ItemList` - Display and manage order items
- `PriceDisplay` - Show calculation results

      