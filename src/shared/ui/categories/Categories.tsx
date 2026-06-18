import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CategoriesProps = {
  categories?: string[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
};

export const Categories: FC<CategoriesProps> = (props) => {
  const { activeIndex = 0, categories, onSelect, className } = props;

  if (!categories?.length) {
    return <p>Категорий не найдено</p>;
  }

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((categorie, index) => (
        <Link
          key={categorie}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href=""
          onClick={() => onSelect?.(index)}
        >
          {categorie}
        </Link>
      ))}
    </div>
  );
};
