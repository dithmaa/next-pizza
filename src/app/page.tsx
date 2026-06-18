"use client";

import { Filters } from "@/features/Filters";
import { categoriesList, sortOptions } from "@/shared/const";
import { Container, Title } from "@/shared/ui";
import { TopBar } from "@/widgets";

export default function Page() {
  return (
    <>
      <Container className="mt-5">
        <Title
          text="Все пиццы"
          size="lg"
          className="mb-2 font-extrabold"
        />
      </Container>

      <TopBar
        categories={categoriesList}
        sortOptions={sortOptions}
      />
      <Container className="pb-14 pt-5">
        <div className="flex gap-[60px]">
        {/* Filters */}
          <div className="w-[250]">
            <Filters />
          </div>

            {/* Products List */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            Список товаров
          </div>
        </div>
        </div>

      
        {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]}/>
        <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]}/> */}
      </Container>
    </>
  );
}