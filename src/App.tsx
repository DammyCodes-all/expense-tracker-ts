import ExpenseTable from "./components/expense-table";
import AddExpenseForm from "./components/add-expense";
import { useState } from "react";
import Filter from "./components/filter";
import { ChartPie } from "./components/piechart";
import { Header } from "./components/header";
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
    id: 6,
    date: new Date(2024, 5, 18),
    description: "Random Purchase",
    category: "Miscellaneous",
    amount: 78.45,
  },
  {
    id: 5,
    date: new Date(2025, 3, 11),
    description: "Book Purchase",
    category: "Debt/Savings",
    amount: 35.99,
  },
];
type AppState = {
  expenseList: ExpenseObj[];
  filteredExpense: ExpenseObj[];
  filterYear: string | number | undefined;
};

const App = () => {
  const [state, setState] = useState<AppState>({
    expenseList: Expenselist,
    filteredExpense: [],
    filterYear: "All",
  });
  const handleExpenseAdd = (expense: ExpenseObj) => {
    setState((prevState) => {
      const newExpenseList = [expense, ...prevState.expenseList];
      return { ...prevState, expenseList: newExpenseList };
    });
  };

  const handleFilter = (value: string) => {
    if (value === "All") {
      setState((prevState) => {
        return { ...prevState, filteredExpense: [], filterYear: "All" };
      });
    } else {
      setState((prevState) => {
        const filteredExpense = state.expenseList.filter((expense) => {
          return expense.date?.getFullYear().toString() === value.toString();
        });
        return {
          ...prevState,
          filteredExpense: filteredExpense,
          filterYear: value,
        };
      });
    }
  };
  const expenseLists =
    state.filteredExpense.length > 0
      ? state.filteredExpense
      : state.expenseList;
  return (
    <>
      <Header />
      <div className="min-h-screen flex w-full justify-center items-center bg-gray-50 dark:bg-gray-900 pt-8">
        <div className="flex flex-col gap-4 items-center justify-center m-auto shadow-lg w-9/10 sm:w-8/10 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-4 font-mono bg-white dark:bg-gray-800">
          <div className="flex w-full flex-wrap justify-between items-center">
            <AddExpenseForm onAddExpense={handleExpenseAdd} />
          </div>
          <Filter handleFilter={handleFilter} />
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
            <ChartPie
              expenseData={expenseLists}
              filterYear={state.filterYear}
            />
          </div>
          <ExpenseTable expenseList={expenseLists} />
        </div>
      </div>
    </>
  );
};

export default App;
