import { Receipt } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 border-b border-blue-300 dark:border-blue-700 px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Receipt className="h-8 w-8 text-white drop-shadow-sm" />
          <h1 className="text-2xl font-bold text-white drop-shadow-sm">Expense Tracker</h1>
        </div>
        
        {/* You can add additional header items here like user menu, notifications, etc. */}
        <div className="flex items-center gap-4">
          {/* Placeholder for future header actions */}
        </div>
      </div>
    </header>
  );
}