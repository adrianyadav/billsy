"use client";

import { IconPlus } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function GoalsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Goals & Targets</h1>
        <p className="text-gray-600 mt-1">
          Set and track your practice performance goals
        </p>
      </div>
      <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2 flex items-center gap-2">
        <IconPlus className="h-4 w-4" />
        Add Goal
      </Button>
    </div>
  );
}
