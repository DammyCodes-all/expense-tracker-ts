import ExpenseTable from "./components/expense-table";
import AddExpenseForm from "./components/add-expense";
import { useState } from "react";
import { SelectComp } from "@/components/select";

type ExpenseObj = {
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

//  dummy data
const Expenselist: ExpenseObj[] = [
  {
    id: 1,
    date: new Date(2022, 10, 20),
    description: "Groceries",
    category: "Food",
    amount: 250.0,
  },
  {
    id: 2,
    date: new Date(2023, 7, 12),
    description: "Bus Ticket",
    category: "Travel",
    amount: 15.5,
  },
  {
    id: 3,
    date: new Date(2024, 1, 15),
    description: "Electricity Bill",
    category: "Bills",
    amount: 120.75,
  },
  {
    id: 4,
    date: new Date(2024, 11, 29),
    description: "Movie Night",
    category: "Entertainment",
    amount: 40.0,
  },
  {
    id: 5,
    date: new Date(2025, 3, 11),
    description: "Book Purchase",
    category: "Debt/Savings",
    amount: 35.99,
  },
];

type FilterProps = {
  handleFilter: (value: string) => void;
};

const Filter = ({ handleFilter }: FilterProps) => {
  return (
    <div className="flex gap-1 justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-600 w-full items-center">
      <h1 className="font-bold text-sm sm:text-md text-gray-800 dark:text-gray-200">
        Filter By Year
      </h1>
      <SelectComp
        onValueChange={handleFilter}
        content={{ label: "Year", items: ["All", "2023", "2024", "2025"] }}
        className="w-35"
      />
    </div>
  );
};

const App = () => {
  const [expenseList, setExpense] = useState(Expenselist);
  const [filteredExpense, setFilteredExpense] = useState<ExpenseObj[]>([]);

  const handleExpenseAdd = (expense: ExpenseObj) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  const handleFilter = (value: string) => {
    if (value === "All") {
      setFilteredExpense([]);
    } else {
      setFilteredExpense(() => {
        const filteredExpense = expenseList.filter((expense) => {
          return expense.date?.getFullYear().toString() === value.toString();
        });
        return filteredExpense;
      });
    }
  };
  const expenseLists =
    filteredExpense.length > 0 ? filteredExpense : expenseList;
  return (
    <div className="min-h-screen flex w-full justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col gap-4 items-center justify-center m-auto shadow-lg w-9/10 sm:w-8/10 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-4 font-mono bg-white dark:bg-gray-800">
        <div className="flex w-full">
          <AddExpenseForm onAddExpense={handleExpenseAdd} />
        </div>
        <Filter handleFilter={handleFilter} />
        <ExpenseTable expenseList={expenseLists} />
      </div>
    </div>
  );
};

export default App;
