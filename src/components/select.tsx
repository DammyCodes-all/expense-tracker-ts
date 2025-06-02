import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Selectcomp = {
  className?: string;
  content: Content;
  onValueChange?: (value: string) => void;
};

interface Content {
  label: string;
  items: string[];
}

export function SelectComp({ className, content, onValueChange }: Selectcomp) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={`Select ${content.label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{content.label}</SelectLabel>
          {content.items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
