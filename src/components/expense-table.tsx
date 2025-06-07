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
  onDelete: (id: number | undefined) => void;
};

const ExpenseTable = ({ expenseList, onDelete }: ExpenseListProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-card rounded-lg shadow-lg border border-border flex flex-col max-h-[600px] transition-colors duration-200">
      <div className="bg-muted rounded-t-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-b-0">
              <TableHead className="w-[120px] px-3 py-3 text-left font-semibold text-muted-foreground">
                Date
              </TableHead>
              <TableHead className="px-3 py-3 text-left font-semibold text-muted-foreground">
                Category
              </TableHead>
              <TableHead className="px-3 py-3 text-left font-semibold text-muted-foreground">
                Description
              </TableHead>
              <TableHead className="px-3 py-3 text-right font-semibold text-muted-foreground">
                Amount
              </TableHead>
              <TableHead className="w-[40px] px-3 py-3 text-center font-semibold text-muted-foreground"></TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <Table>
          <TableBody>
            {expenseList.map((expense) => (
              <TableRow
                key={expense?.id}
                className="border-b border-border hover:bg-accent transition-colors duration-200"
              >
                <TableCell className="w-[120px] px-3 py-3 text-left text-sm text-muted-foreground">
                  {expense?.date?.toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "2-digit",
                  })}
                </TableCell>
                <TableCell className="px-3 py-3 text-left">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {expense.category}
                  </span>
                </TableCell>
                <TableCell className="px-3 py-3 font-medium text-card-foreground">
                  {expense.description}
                </TableCell>
                <TableCell className="px-3 py-3 text-right font-semibold text-card-foreground">
                  ${expense.amount.toFixed(2)}
                </TableCell>
                <TableCell className="w-[40px] px-3 py-3 text-center">
                  <button onClick={() => onDelete(expense.id)}>
                    <Trash
                      className="cursor-pointer text-destructive hover:text-destructive/80 transition-colors duration-200 mx-auto"
                      size={16}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-muted rounded-b-lg border-t border-border">
        <Table>
          <TableFooter>
            <TableRow>
              <TableCell className="w-[120px] px-3 py-3 font-bold text-card-foreground">
                Total
              </TableCell>
              <TableCell className="px-3 py-3"></TableCell>
              <TableCell className="px-3 py-3"></TableCell>
              <TableCell className="px-3 py-3 text-right font-bold text-lg text-card-foreground">
                $
                {expenseList
                  .reduce((prev, expense) => {
                    return prev + expense.amount;
                  }, 0)
                  .toFixed(2)}
              </TableCell>
              <TableCell className="w-[40px] px-3 py-3"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ExpenseTable;
