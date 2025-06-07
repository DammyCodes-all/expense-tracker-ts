export type ExpenseObj = {
  id: number | undefined;
  date: Date | undefined;
  amount: number;
  description: string;
  category:
    | "Food"
    | "Travel"
    | "Entertainment"
    | "Bills"
    | "Debt/Savings"
    | "Miscellaneous"
    | undefined;
};

export const Expenselist: ExpenseObj[] = [
  // 2025 Expenses
  // January 2025 (5 expenses)
  {
    id: 1,
    date: new Date("2025-01-02"),
    amount: 89.45,
    description: "New Year grocery haul",
    category: "Food",
  },
  {
    id: 2,
    date: new Date("2025-01-05"),
    amount: 1200.0,
    description: "January rent",
    category: "Bills",
  },
  {
    id: 3,
    date: new Date("2025-01-15"),
    amount: 78.3,
    description: "Gas station fill-up",
    category: "Travel",
  },
  {
    id: 4,
    date: new Date("2025-01-25"),
    amount: 156.2,
    description: "Weekly groceries",
    category: "Food",
  },
  {
    id: 5,
    date: new Date("2025-01-28"),
    amount: 650.0,
    description: "Emergency fund deposit",
    category: "Debt/Savings",
  },

  // February 2025 (8 expenses)
  {
    id: 6,
    date: new Date("2025-02-01"),
    amount: 95.4,
    description: "Internet bill",
    category: "Bills",
  },
  {
    id: 7,
    date: new Date("2025-02-05"),
    amount: 1200.0,
    description: "February rent",
    category: "Bills",
  },
  {
    id: 8,
    date: new Date("2025-02-10"),
    amount: 299.99,
    description: "Weekend getaway hotel",
    category: "Travel",
  },
  {
    id: 9,
    date: new Date("2025-02-14"),
    amount: 75.5,
    description: "Valentine's movie date",
    category: "Entertainment",
  },
  {
    id: 10,
    date: new Date("2025-02-16"),
    amount: 45.99,
    description: "Netflix & Spotify subscriptions",
    category: "Entertainment",
  },
  {
    id: 11,
    date: new Date("2025-02-18"),
    amount: 134.67,
    description: "Monthly grocery shopping",
    category: "Food",
  },
  {
    id: 12,
    date: new Date("2025-02-22"),
    amount: 42.3,
    description: "Coffee maker",
    category: "Miscellaneous",
  },
  {
    id: 13,
    date: new Date("2025-02-26"),
    amount: 400.0,
    description: "Savings account transfer",
    category: "Debt/Savings",
  },

  // March 2025 (4 expenses)
  {
    id: 14,
    date: new Date("2025-03-05"),
    amount: 1250.0,
    description: "March rent (increase)",
    category: "Bills",
  },
  {
    id: 15,
    date: new Date("2025-03-15"),
    amount: 56.75,
    description: "St. Patrick's Day celebration",
    category: "Entertainment",
  },
  {
    id: 16,
    date: new Date("2025-03-20"),
    amount: 450.0,
    description: "IRA contribution",
    category: "Debt/Savings",
  },
  {
    id: 17,
    date: new Date("2025-03-28"),
    amount: 145.3,
    description: "Road trip gas",
    category: "Travel",
  },

  // April 2025 (6 expenses)
  {
    id: 18,
    date: new Date("2025-04-02"),
    amount: 76.45,
    description: "Easter brunch groceries",
    category: "Food",
  },
  {
    id: 19,
    date: new Date("2025-04-05"),
    amount: 1250.0,
    description: "April rent",
    category: "Bills",
  },
  {
    id: 20,
    date: new Date("2025-04-12"),
    amount: 234.99,
    description: "Spring break trip",
    category: "Travel",
  },
  {
    id: 21,
    date: new Date("2025-04-18"),
    amount: 89.5,
    description: "Concert tickets",
    category: "Entertainment",
  },
  {
    id: 22,
    date: new Date("2025-04-26"),
    amount: 167.89,
    description: "Home garden supplies",
    category: "Miscellaneous",
  },
  {
    id: 23,
    date: new Date("2025-04-29"),
    amount: 112.34,
    description: "Weekly food haul",
    category: "Food",
  },

  // May 2025 (3 expenses)
  {
    id: 24,
    date: new Date("2025-05-05"),
    amount: 1250.0,
    description: "May rent",
    category: "Bills",
  },
  {
    id: 25,
    date: new Date("2025-05-15"),
    amount: 65.99,
    description: "Streaming services bundle",
    category: "Entertainment",
  },
  {
    id: 26,
    date: new Date("2025-05-25"),
    amount: 145.78,
    description: "BBQ party groceries",
    category: "Food",
  },

  // June 2025 (9 expenses)
  {
    id: 27,
    date: new Date("2025-06-01"),
    amount: 87.6,
    description: "Summer prep shopping",
    category: "Miscellaneous",
  },
  {
    id: 28,
    date: new Date("2025-06-05"),
    amount: 1250.0,
    description: "June rent",
    category: "Bills",
  },
  {
    id: 29,
    date: new Date("2025-06-08"),
    amount: 123.45,
    description: "Phone bill",
    category: "Bills",
  },
  {
    id: 30,
    date: new Date("2025-06-10"),
    amount: 198.9,
    description: "Summer vacation fund",
    category: "Travel",
  },
  {
    id: 31,
    date: new Date("2025-06-15"),
    amount: 78.45,
    description: "Father's Day dinner",
    category: "Food",
  },
  {
    id: 32,
    date: new Date("2025-06-18"),
    amount: 156.99,
    description: "Summer movies",
    category: "Entertainment",
  },
  {
    id: 33,
    date: new Date("2025-06-20"),
    amount: 600.0,
    description: "Monthly savings goal",
    category: "Debt/Savings",
  },
  {
    id: 34,
    date: new Date("2025-06-25"),
    amount: 89.67,
    description: "Beach gear",
    category: "Miscellaneous",
  },
  {
    id: 35,
    date: new Date("2025-06-28"),
    amount: 134.55,
    description: "Summer groceries",
    category: "Food",
  },

  // 2024 Expenses
  // July 2024 (7 expenses)
  {
    id: 36,
    date: new Date("2024-07-02"),
    amount: 567.8,
    description: "4th of July vacation",
    category: "Travel",
  },
  {
    id: 37,
    date: new Date("2024-07-05"),
    amount: 1150.0,
    description: "July rent",
    category: "Bills",
  },
  {
    id: 38,
    date: new Date("2024-07-12"),
    amount: 98.75,
    description: "Summer festival",
    category: "Entertainment",
  },
  {
    id: 39,
    date: new Date("2024-07-18"),
    amount: 167.45,
    description: "Weekly groceries",
    category: "Food",
  },
  {
    id: 40,
    date: new Date("2024-07-22"),
    amount: 400.0,
    description: "Emergency fund",
    category: "Debt/Savings",
  },
  {
    id: 41,
    date: new Date("2024-07-26"),
    amount: 145.9,
    description: "Summer AC bill",
    category: "Bills",
  },
  {
    id: 42,
    date: new Date("2024-07-29"),
    amount: 76.5,
    description: "Pool accessories",
    category: "Miscellaneous",
  },

  // August 2024 (5 expenses)
  {
    id: 43,
    date: new Date("2024-08-05"),
    amount: 1150.0,
    description: "August rent",
    category: "Bills",
  },
  {
    id: 44,
    date: new Date("2024-08-15"),
    amount: 89.99,
    description: "Outdoor concert",
    category: "Entertainment",
  },
  {
    id: 45,
    date: new Date("2024-08-20"),
    amount: 234.6,
    description: "Back-to-school shopping",
    category: "Miscellaneous",
  },
  {
    id: 46,
    date: new Date("2024-08-25"),
    amount: 550.0,
    description: "Student loan payment",
    category: "Debt/Savings",
  },
  {
    id: 47,
    date: new Date("2024-08-28"),
    amount: 123.45,
    description: "Late summer groceries",
    category: "Food",
  },

  // September 2024 (6 expenses)
  {
    id: 48,
    date: new Date("2024-09-02"),
    amount: 98.7,
    description: "Labor Day weekend",
    category: "Entertainment",
  },
  {
    id: 49,
    date: new Date("2024-09-05"),
    amount: 1150.0,
    description: "September rent",
    category: "Bills",
  },
  {
    id: 50,
    date: new Date("2024-09-10"),
    amount: 167.89,
    description: "Fall wardrobe",
    category: "Miscellaneous",
  },
  {
    id: 51,
    date: new Date("2024-09-15"),
    amount: 145.67,
    description: "Autumn grocery shopping",
    category: "Food",
  },
  {
    id: 52,
    date: new Date("2024-09-20"),
    amount: 289.99,
    description: "Weekend road trip",
    category: "Travel",
  },
  {
    id: 53,
    date: new Date("2024-09-25"),
    amount: 475.0,
    description: "Monthly savings",
    category: "Debt/Savings",
  },

  // October 2024 (8 expenses)
  {
    id: 54,
    date: new Date("2024-10-01"),
    amount: 156.78,
    description: "Halloween decorations",
    category: "Miscellaneous",
  },
  {
    id: 55,
    date: new Date("2024-10-05"),
    amount: 1150.0,
    description: "October rent",
    category: "Bills",
  },
  {
    id: 56,
    date: new Date("2024-10-10"),
    amount: 89.45,
    description: "Pumpkin spice everything",
    category: "Food",
  },
  {
    id: 57,
    date: new Date("2024-10-15"),
    amount: 234.99,
    description: "Horror movie marathon",
    category: "Entertainment",
  },
  {
    id: 58,
    date: new Date("2024-10-18"),
    amount: 95.4,
    description: "Internet bill",
    category: "Bills",
  },
  {
    id: 59,
    date: new Date("2024-10-20"),
    amount: 345.6,
    description: "Fall vacation",
    category: "Travel",
  },
  {
    id: 60,
    date: new Date("2024-10-25"),
    amount: 400.0,
    description: "Emergency fund boost",
    category: "Debt/Savings",
  },
  {
    id: 61,
    date: new Date("2024-10-28"),
    amount: 178.9,
    description: "Halloween party groceries",
    category: "Food",
  },

  // November 2024 (4 expenses)
  {
    id: 62,
    date: new Date("2024-11-05"),
    amount: 1150.0,
    description: "November rent",
    category: "Bills",
  },
  {
    id: 63,
    date: new Date("2024-11-15"),
    amount: 145.99,
    description: "Black Friday entertainment",
    category: "Entertainment",
  },
  {
    id: 64,
    date: new Date("2024-11-25"),
    amount: 567.89,
    description: "Thanksgiving travel",
    category: "Travel",
  },
  {
    id: 65,
    date: new Date("2024-11-28"),
    amount: 234.5,
    description: "Thanksgiving groceries",
    category: "Food",
  },

  // December 2024 (10 expenses)
  {
    id: 66,
    date: new Date("2024-12-01"),
    amount: 456.78,
    description: "Holiday gift shopping",
    category: "Miscellaneous",
  },
  {
    id: 67,
    date: new Date("2024-12-05"),
    amount: 1150.0,
    description: "December rent",
    category: "Bills",
  },
  {
    id: 68,
    date: new Date("2024-12-08"),
    amount: 298.75,
    description: "Winter clothes",
    category: "Miscellaneous",
  },
  {
    id: 69,
    date: new Date("2024-12-10"),
    amount: 289.99,
    description: "Holiday party food",
    category: "Food",
  },
  {
    id: 70,
    date: new Date("2024-12-12"),
    amount: 87.5,
    description: "Holiday decorations",
    category: "Miscellaneous",
  },
  {
    id: 71,
    date: new Date("2024-12-15"),
    amount: 345.5,
    description: "Christmas movie tickets",
    category: "Entertainment",
  },
  {
    id: 72,
    date: new Date("2024-12-18"),
    amount: 125.45,
    description: "Phone bill",
    category: "Bills",
  },
  {
    id: 73,
    date: new Date("2024-12-20"),
    amount: 678.9,
    description: "Holiday travel home",
    category: "Travel",
  },
  {
    id: 74,
    date: new Date("2024-12-25"),
    amount: 600.0,
    description: "Holiday savings start",
    category: "Debt/Savings",
  },
  {
    id: 75,
    date: new Date("2024-12-28"),
    amount: 198.67,
    description: "New Year's Eve prep",
    category: "Food",
  },

  // 2023 Expenses
  // January 2023 (3 expenses)
  {
    id: 76,
    date: new Date("2023-01-05"),
    amount: 1000.0,
    description: "January rent",
    category: "Bills",
  },
  {
    id: 77,
    date: new Date("2023-01-15"),
    amount: 156.78,
    description: "New Year groceries",
    category: "Food",
  },
  {
    id: 78,
    date: new Date("2023-01-28"),
    amount: 350.0,
    description: "Emergency savings",
    category: "Debt/Savings",
  },

  // February 2023 (5 expenses)
  {
    id: 79,
    date: new Date("2023-02-05"),
    amount: 1000.0,
    description: "February rent",
    category: "Bills",
  },
  {
    id: 80,
    date: new Date("2023-02-12"),
    amount: 89.99,
    description: "Valentine's gifts",
    category: "Miscellaneous",
  },
  {
    id: 81,
    date: new Date("2023-02-18"),
    amount: 167.45,
    description: "Winter groceries",
    category: "Food",
  },
  {
    id: 82,
    date: new Date("2023-02-22"),
    amount: 45.5,
    description: "Movie night",
    category: "Entertainment",
  },
  {
    id: 83,
    date: new Date("2023-02-26"),
    amount: 78.3,
    description: "Gas fill-up",
    category: "Travel",
  },

  // March 2023 (7 expenses)
  {
    id: 84,
    date: new Date("2023-03-02"),
    amount: 123.45,
    description: "Spring cleaning supplies",
    category: "Miscellaneous",
  },
  {
    id: 85,
    date: new Date("2023-03-05"),
    amount: 1000.0,
    description: "March rent",
    category: "Bills",
  },
  {
    id: 86,
    date: new Date("2023-03-10"),
    amount: 234.67,
    description: "Spring wardrobe",
    category: "Miscellaneous",
  },
  {
    id: 87,
    date: new Date("2023-03-15"),
    amount: 89.99,
    description: "Streaming subscriptions",
    category: "Entertainment",
  },
  {
    id: 88,
    date: new Date("2023-03-18"),
    amount: 156.78,
    description: "Weekly groceries",
    category: "Food",
  },
  {
    id: 89,
    date: new Date("2023-03-22"),
    amount: 345.5,
    description: "Spring vacation",
    category: "Travel",
  },
  {
    id: 90,
    date: new Date("2023-03-28"),
    amount: 400.0,
    description: "Monthly savings",
    category: "Debt/Savings",
  },
];
