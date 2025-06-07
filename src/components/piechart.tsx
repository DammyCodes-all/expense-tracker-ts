"use client";

import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a legend";

const chartConfig = {
  category: {
    label: "Category",
  },
  Food: {
    label: "Food",
    color: "var(--chart-1)",
  },
  Travel: {
    label: "Travel",
    color: "var(--chart-2)",
  },
  Bills: {
    label: "Bills",
    color: "var(--chart-3)",
  },
  "Debt/Savings": {
    label: "Debt/Savings",
    color: "var(--chart-4)",
  },
  Entertainment: {
    label: "Entertainment",
    color: "var(--chart-5)",
  },
  Miscellaneous: {
    label: "Miscellaneous",
    color: "var(--chart-6)",
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

type PieChartProps = {
  expenseData?: ExpenseObj[];
  filterYear?: string | number | undefined;
};

const getFreqByCategory = (list: ExpenseObj[], category: string) => {
  return list.filter((expense) => {
    return expense.category === category;
  });
};

export function ChartPie({ expenseData, filterYear }: PieChartProps) {
  const chartData = [
    {
      category: "Food",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Food").length
        : 0,
      fill: "var(--chart-1)",
    },
    {
      category: "Travel",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Travel").length
        : 0,
      fill: "var(--chart-2)",
    },
    {
      category: "Bills",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Bills").length
        : 0,
      fill: "var(--chart-3)",
    },
    {
      category: "Debt/Savings",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Debt/Savings").length
        : 0,
      fill: "var(--chart-4)",
    },
    {
      category: "Entertainment",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Entertainment").length
        : 0,
      fill: "var(--chart-5)",
    },
    {
      category: "Miscellaneous",
      frequency: expenseData
        ? getFreqByCategory(expenseData, "Miscellaneous").length
        : 0,
      fill: "var(--chart-6)",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl flex flex-col p-4 gap-3 border border-gray-200 shadow-sm h-[400px]">
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div>
          <h1 className="font-bold text-xl text-gray-800">
            Category Breakdown
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Showing for "{filterYear}"
          </p>
        </div>
      </div>

      <div className="flex-1 flex w-full items-center justify-center overflow-hidden">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <PieChart width={300} height={280}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="frequency"
              nameKey="category"
              innerRadius={40}
              outerRadius={80}
              cx="50%"
              cy="45%"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="flex-wrap gap-1 *:basis-1/3 *:justify-center text-xs"
              wrapperStyle={{ paddingTop: "10px" }}
            />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
