import ExpenseTable from "./components/expense-table";
import AddExpenseForm from "./components/add-expense";
import { useState } from "react";
import Filter from "./components/filter";
import { ChartPie } from "./components/piechart";
import { Header } from "./components/header";
import { ChartBar } from "./components/barchart";
import { Expenselist } from "./dummydata";

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
      <div className="min-h-screen w-full  dark:bg-gray-900 pt-5 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AddExpenseForm onAddExpense={handleExpenseAdd} />
            <ChartPie
              expenseData={expenseLists}
              filterYear={state.filterYear}
            />
            <ChartBar
              expenseData={expenseLists}
              filterYear={state.filterYear}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>

          <Filter handleFilter={handleFilter} />

          <ExpenseTable expenseList={expenseLists} />
        </div>
      </div>
    </>
  );
};

export default App;
