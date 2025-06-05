"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      frequency: expenseData ? getFreqByCategory(expenseData, "Food").length : 0,
      fill: "var(--chart-1)",
    },
    {
      category: "Travel",
      frequency: expenseData ? getFreqByCategory(expenseData, "Travel").length : 0,
      fill: "var(--chart-2)",
    },
    {
      category: "Bills",
      frequency: expenseData ? getFreqByCategory(expenseData, "Bills").length : 0,
      fill: "var(--chart-3)",
    },
    {
      category: "Debt/Savings",
      frequency: expenseData ? getFreqByCategory(expenseData, "Debt/Savings").length : 0,
      fill: "var(--chart-4)",
    },
    {
      category: "Entertainment",
      frequency: expenseData ? getFreqByCategory(expenseData, "Entertainment").length : 0,
      fill: "var(--chart-5)",
    },
    {
      category: "Miscellaneous",
      frequency: expenseData ? getFreqByCategory(expenseData, "Miscellaneous").length : 0,
      fill: "var(--chart-6)",
    },
  ];

  return (
    <Card className="flex flex-col w-full md:w-[47%]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Category</CardTitle>
        <CardDescription>Showing for {filterYear}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="frequency"
              nameKey="category"
              innerRadius={50}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
