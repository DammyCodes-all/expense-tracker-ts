import { SelectComp } from "@/components/select";

const Filter = () => {
  return (
    <div className="flex gap-1 justify-between px-4 py-2 border-b-1 border-gray-300 w-full">
      <h1>Filter By Year</h1>
      <SelectComp
        content={{ label: "Enter Year", items: ["2023", "2024", "2025"] }}
      />
    </div>
  );
};
export default Filter;
