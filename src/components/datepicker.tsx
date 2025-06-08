import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  className?: string;
  changeDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
}

export function DatePicker({
  className,
  changeDate,
  onDateChange,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(changeDate);

  useEffect(() => {
    setDate(changeDate);
  }, [changeDate]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate); // Update internal state
    onDateChange?.(selectedDate); // Notify parent component
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-5/10 justify-center sm:justify-start items-center text-left gap-1 md:gap-2 text-sm font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
