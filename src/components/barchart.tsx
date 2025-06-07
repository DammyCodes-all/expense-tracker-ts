import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

//
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartConfig = {
  freq: {
    label: "Expenses",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

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

type ChartProps = {
  expenseData?: ExpenseObj[];
  filterYear?: string | number | undefined;
  className?: string;
};

const getFreqByYear = (list: ExpenseObj[], month: number) => {
  return list.filter((expense) => {
    return expense.date?.getMonth() == month;
  });
};

export function ChartBar({ expenseData, filterYear, className }: ChartProps) {
  const chartData = [
    { month: "January", freq: getFreqByYear(expenseData || [], 0).length },
    { month: "February", freq: getFreqByYear(expenseData || [], 1).length },
    { month: "March", freq: getFreqByYear(expenseData || [], 2).length },
    { month: "April", freq: getFreqByYear(expenseData || [], 3).length },
    { month: "May", freq: getFreqByYear(expenseData || [], 4).length },
    { month: "June", freq: getFreqByYear(expenseData || [], 5).length },
    { month: "July", freq: getFreqByYear(expenseData || [], 6).length },
    { month: "August", freq: getFreqByYear(expenseData || [], 7).length },
    { month: "September", freq: getFreqByYear(expenseData || [], 8).length },
    { month: "October", freq: getFreqByYear(expenseData || [], 9).length },
    { month: "November", freq: getFreqByYear(expenseData || [], 10).length },
    { month: "December", freq: getFreqByYear(expenseData || [], 11).length },
  ];

  return (
    <div
      className={`w-full bg-white rounded-xl flex flex-col p-4 gap-3 border border-gray-200 shadow-sm h-[400px] ${
        className || ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div>
          <h1 className="font-bold text-xl text-gray-800">Monthly Expenses</h1>
          <p className="text-xs text-gray-500 mt-1">
            Showing for "{filterYear}"
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            width={300}
            height={250}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="freq" fill="var(--chart-1)" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
