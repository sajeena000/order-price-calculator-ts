# Order Price Calculator 

A TypeScript application for calculating order totals with tax and discounts. Features clean architecture, async operations, and a modern cyberpunk UI.

## Features

- **Item Management** - Add/remove items with price and quantity
- **Tax & Discounts** - Configurable tax rate (default 8.5%)
- **Async Operations** - Promise-based calculations with error handling
- **TypeScript** - Fully typed with strict mode

## Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript
npx tsc

# 3. Start local server
npx serve .
# OR
npx http-server -p 8080

# 4. Open in browser
# Visit http://localhost:3000 (or the port shown in terminal)
```

## Project Structure
```
order-price-calculator-ts/
├── dist/                # Compiled JavaScript 
├── src/
│   ├── components/      # UI components (OrderForm, ItemList, etc.)
│   ├── models/          # Business logic classes
│   ├── services/        # Calculation & validation services
│   ├── types/           # TypeScript interfaces
│   ├── utils/           # Helper functions (Formatters)
│   ├── main.ts          # Application entry point
│   └── styles.css       # Styling
├── index.html           # Main HTML template
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Architecture

- **Models**: Defines the shape of data (OrderItem, Discount) and business rules.
- **Services**: Handles logic separated from the UI (CalculationService, ValidationService).
- **Components**: Classes that manage specific DOM sections (OrderForm, PriceDisplay).
- **Async**: Calculations are simulated as asynchronous operations using Promises.
