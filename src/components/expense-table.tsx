import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
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
type ExpenseListProps = {
  expenseList: ExpenseObj[];
};

const ExpenseTable = ({ expenseList }: ExpenseListProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <Table className="w-full">
        <TableHeader className="bg-gray-200">
          <TableRow className="border-b-0">
            <TableHead className="w-[120px] px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
              Date
            </TableHead>
            <TableHead className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
              Category
            </TableHead>
            <TableHead className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">
              Description
            </TableHead>
            <TableHead className="px-3 py-2 text-right font-semibold text-gray-700 dark:text-gray-200">
              Amount
            </TableHead>
            <TableHead className="w-[60px] px-3 py-2 text-center font-semibold text-gray-700 dark:text-gray-200">
              {" "}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenseList.map((expense) => (
            <TableRow
              key={expense?.id}
              className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <TableCell className="px-3 py-2 text-left text-sm text-gray-600 dark:text-gray-400">
                {expense?.date?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "2-digit",
                })}
              </TableCell>
              <TableCell className="px-3 py-2 text-left">
                {expense.category}
              </TableCell>
              <TableCell className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">
                {expense.description}
              </TableCell>
              <TableCell className="px-3 py-2 text-right font-semibold text-gray-900 dark:text-gray-100">
                ${expense.amount.toFixed(2)}
              </TableCell>
              <TableCell className="px-3 py-2 text-center">
                <Trash
                  className="cursor-pointer text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200 mx-auto"
                  size={16}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-gray-300 ">
          <TableRow className="bg-gray-200">
            <TableCell className="px-3 py-2 font-bold text-gray-900 dark:text-gray-100">
              Total
            </TableCell>
            <TableCell className="px-3 py-2"></TableCell>
            <TableCell className="px-3 py-2"></TableCell>
            <TableCell className="px-3 py-2 text-center font-bold text-lg text-gray-900 dark:text-gray-100">
              $
              {expenseList
                .reduce((prev, expense) => {
                  return prev + expense.amount;
                }, 0)
                .toFixed(2)}
            </TableCell>
            <TableCell className="px-3 py-2"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
export default ExpenseTable;
