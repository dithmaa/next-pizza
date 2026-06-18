"use client";

import { FC, useState } from "react";

import { cn } from "@/lib/utils";
import { Categories, SortPopup, PopupOption, Container } from "@/shared/ui";

type TopBarProps = {
  categories: string[];
  sortOptions: PopupOption[];
  className?: string;
};

export const TopBar: FC<TopBarProps> = ({
  categories,
  sortOptions,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSort, setActiveSort] = useState(
    sortOptions[0]?.value ?? ""
  );

  return (
    <div className={cn("sticky top-0 bg-white/90 py-3 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex items-center justify-between">
        <Categories
        activeIndex={activeIndex}
        categories={categories}
        onSelect={setActiveIndex}
      />

      <SortPopup
        options={sortOptions}
        value={activeSort}
        onChange={setActiveSort}
      />
      </Container>
    </div>
  );
};