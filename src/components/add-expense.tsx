import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker";
import { useState } from "react";
import { SelectComp } from "@/components/select";
type Expense = {
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
type ExpenseAddProps = {
  onAddExpense: (expense: Expense) => void;
};

const initialState = {
  id: undefined,
  date: undefined,
  amount: 0,
  description: "",
  category: undefined,
};

const ExpenseAddForm = ({ onAddExpense }: ExpenseAddProps) => {
  const [expense, setExpense] = useState<Expense>(initialState);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense((prevExpense) => {
      return { ...prevExpense, amount: parseFloat(e.target.value) || 0 };
    });
  };
  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        description: e.target.value as Expense["description"],
      };
    });
  };
  const handleCategoryChange = (value: string) => {
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        category: value as Expense["category"],
      };
    });
  };
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setExpense((prevExpense) => ({
        ...prevExpense,
        date: date,
      }));
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", JSON.stringify(6));
    }
    const id: number | undefined =
      JSON.parse(localStorage.getItem("id") || JSON.stringify(8)) + 1;
    const newExpense: Expense = {
      id: id,
      date: expense.date || new Date(),
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
    };
    if (!newExpense.amount || !newExpense.description) {
      return;
    } else {
      onAddExpense(newExpense);
    }

    setExpense(initialState);
  };
  return (
    <form
      className="w-full bg-white rounded-xl flex flex-col p-4 gap-3 border border-gray-200 shadow-sm h-[400px] justify-evenly"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div>
          <h1 className="font-bold text-xl text-gray-800">Add Expense</h1>
          <p className="text-xs text-gray-500 mt-1">Track your spending</p>
        </div>
      </div>
      <div className="flex flex-col  gap-4 w-full">
        <div className="flex items-center gap-3 w-full">
          <DatePicker
            className="h-9 flex-1"
            changeDate={expense.date}
            onDateChange={handleDateChange}
          />
          <input
            type="number"
            step="0.01"
            value={expense.amount === 0 ? "" : expense.amount}
            className="border border-gray-300 min-w-0 rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-9 text-sm"
            placeholder="Amount"
            onChange={handleAmountChange}
          />
        </div>

        <input
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-9 text-sm"
          type="text"
          value={expense.description}
          placeholder="Description"
          onChange={handleDescChange}
        />

        <SelectComp
          className="w-full"
          content={SelectObject}
          onValueChange={handleCategoryChange}
        />

        <Button className="self-end bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 gap-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center cursor-pointer">
          <Plus size={16} strokeWidth={2.5} />
          Add Expense
        </Button>
      </div>
    </form>
  );
};
interface Content {
  label: string;
  items: string[];
}

const SelectObject: Content = {
  label: "Category",
  items: ["Food", "Travel", "Bills", "Debt/Savings", "Miscellaneous"],
};
export default ExpenseAddForm;
