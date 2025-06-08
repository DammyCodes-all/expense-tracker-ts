# Expense Tracker - React TypeScript Application

A modern, responsive expense tracking application built with React, TypeScript, and Tailwind CSS. Features a clean interface with dark mode support, interactive charts, and comprehensive expense management capabilities.

## 🚀 Features

- **Add Expenses**: Create new expense entries with date, amount, description, and category
- **View Expenses**: Display expenses in a clean, organized table format with sorting capabilities
- **Interactive Charts**:
  - Pie chart showing expense distribution by category
  - Bar chart displaying monthly expense trends
- **Advanced Filtering**: Filter expenses by specific years (2023, 2024, 2025) or view all
- **Date Picker**: Intuitive date selection with calendar interface
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Category Management**: Organize expenses by categories (Food, Travel, Entertainment, Bills, Debt/Savings, Miscellaneous)
- **Real-time Calculations**: Automatic total calculation and data visualization updates
- **Data Persistence**: Local storage integration for data persistence

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.8
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Charts**: Recharts 2.15.3
- **Icons**: Lucide React 0.511.0
- **Date Handling**: date-fns 4.1.0
- **State Management**: React useState and useEffect hooks
- **Calendar Component**: React Day Picker 8.10.1

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
│   ├── datepicker.tsx      # Custom date picker with popover
│   ├── filter.tsx          # Year filter component
│   ├── piechart.tsx        # Pie chart for category distribution
│   └── barchart.tsx        # Bar chart for monthly trends
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DammyCodes-all/expense-tracker-ts.git
   cd expense-tracker-ts
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create .npmrc file (if needed for deployment)**

   ```bash
   echo "legacy-peer-deps=true" > .npmrc
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Adding an Expense

1. Fill in the expense form with:

   - **Date**: Select the expense date using the interactive date picker
   - **Amount**: Enter the expense amount (supports decimals)
   - **Description**: Add a description for the expense
   - **Category**: Choose from predefined categories

2. Click "Add Expense" to save the entry

### Viewing Analytics

- **Pie Chart**: Visual breakdown of expenses by category
- **Bar Chart**: Monthly expense trends over time
- **Total Calculations**: Real-time expense totals

### Filtering and Sorting

- Use the "Filter By Year" dropdown to view expenses from specific years
- Select "All" to view all expenses regardless of year
- Sort table columns by clicking on headers

## 📊 Charts and Visualization

### Pie Chart Features

- Interactive category-based expense breakdown
- Hover effects with detailed information
- Color-coded categories for easy identification

### Bar Chart Features

- Monthly expense trends visualization
- Responsive design with proper scaling
- Clean, modern chart styling using Recharts

## 🎨 Customization

### Adding New Categories

Update the category options in your components:

```typescript
const categories = [
  "Food",
  "Travel",
  "Entertainment",
  "Bills",
  "Debt/Savings",
  "Miscellaneous",
  "YourNewCategory", // Add your category here
];
```

### Chart Customization

Modify chart colors and styling in:

- `src/components/piechart.tsx`
- `src/components/barchart.tsx`

### Theme Customization

The application uses Tailwind CSS with shadcn/ui components:

- **Color Scheme**: Customizable through CSS variables
- **Dark Mode**: Comprehensive dark mode support
- **Responsive**: Mobile-first responsive design

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Dependencies

#### Core Dependencies

- React 19.1.0
- TypeScript 5.8.3
- Vite 6.3.5
- Tailwind CSS 4.1.8

#### UI and Styling

- @radix-ui components
- class-variance-authority
- clsx & tailwind-merge
- lucide-react icons

#### Charts and Data

- recharts for data visualization
- date-fns for date manipulation
- react-day-picker for calendar

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

The project includes:

- `.npmrc` configuration for dependency resolution
- Optimized build settings
- TypeScript configuration for production

### Build Configuration

- **TypeScript**: Strict mode enabled
- **Vite**: Optimized for production builds
- **ESLint**: Code quality enforcement

## 🔧 Configuration Files

### Key Configuration Files

- `vite.config.ts` - Vite configuration with React plugin
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules and plugins
- `.npmrc` - npm configuration for dependency resolution

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Recharts](https://recharts.org/) for responsive chart components
- [Lucide](https://lucide.dev/) for clean, consistent icons
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [React Day Picker](https://react-day-picker.js.org/) for calendar functionality

## 🔗 Live Demo

[View Live Application](https://expense-tracker-ts-two.vercel.app/)

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**

### Recent Updates

- ✅ Fixed dependency conflicts with react-day-picker and date-fns
- ✅ Implemented responsive design improvements
- ✅ Added comprehensive chart visualizations
- ✅ Optimized for Vercel deployment
- ✅ Enhanced TypeScript configuration
