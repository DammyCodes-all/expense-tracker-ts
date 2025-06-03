# Expense Tracker - React TypeScript Application

A modern, responsive expense tracking application built with React, TypeScript, and Tailwind CSS. Features a clean interface with dark mode support for managing personal expenses.

## 🚀 Features

- **Add Expenses**: Create new expense entries with date, amount, description, and category
- **View Expenses**: Display expenses in a clean, organized table format
- **Filter by Year**: Filter expenses by specific years (2023, 2024, 2025) or view all
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Category Management**: Organize expenses by categories (Food, Travel, Entertainment, Bills, Debt/Savings, Miscellaneous)
- **Real-time Calculations**: Automatic total calculation of expenses

## 🛠️ Tech Stack

- **Frontend Framework**: React 19\ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **State Management**: React useState hooks

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── table.tsx
│   │   ├── select.tsx
│   │   ├── popover.tsx
│   │   └── calendar.tsx
│   ├── add-expense.tsx     # Expense form component
│   ├── expense-table.tsx   # Expense display table
│   ├── datepicker.tsx      # Custom date picker
│   └── select.tsx          # Custom select component
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-ts-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required UI components**

   ```bash
   npx shadcn-ui@latest add button table select popover calendar
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Adding an Expense

1. Fill in the expense form with:

   - **Date**: Select the expense date using the date picker
   - **Amount**: Enter the expense amount (supports decimals)
   - **Description**: Add a description for the expense
   - **Category**: Choose from predefined categories

2. Click "Add Expense" to save the entry

### Filtering Expenses

- Use the "Filter By Year" dropdown to view expenses from specific years
- Select "All" to view all expenses regardless of year

### Viewing Expense Details

- All expenses are displayed in a sortable table
- View totals at the bottom of the table
- Each row shows date, category, description, and amount
- Hover effects provide better user interaction

## 🎨 Customization

### Adding New Categories

Update the category union type in the expense type definition:

```typescript
category:
  | "Food"
  | "Travel"
  | "Entertainment"
  | "Bills"
  | "Debt/Savings"
  | "Miscellaneous"
  | "YourNewCategory"  // Add your category here
  | undefined;
```

### Styling

The application uses Tailwind CSS for styling. Key design features:

- **Color Scheme**: Gray-based with blue accents
- **Dark Mode**: Comprehensive dark mode support using `dark:` prefixes
- **Responsive**: Mobile-first responsive design
- **Shadows & Borders**: Subtle shadows and borders for depth

### Theme Customization

Modify colors in your Tailwind configuration or update the CSS custom properties for the shadcn/ui components.

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project includes:

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Component-based Architecture**: Modular, reusable components

## 🔧 Configuration

### ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for clean, consistent icons
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
