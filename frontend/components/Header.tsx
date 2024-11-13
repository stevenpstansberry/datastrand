"use client";

import { Dna } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <Dna className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">HelixStream Pipeline Demo Dashboard</h1>
          <h2 className="text-xl text-muted-foreground mt-1">COVID-19 Variant Mutation Analysis</h2>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}