import { SelectComp } from "@/components/select";

type FilterProps = {
  handleFilter: (value: string) => void;
};

const Filter = ({ handleFilter }: FilterProps) => {
  return (
    <div className="flex gap-1 justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-600 w-full items-center mb-4">
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
export default Filter;
