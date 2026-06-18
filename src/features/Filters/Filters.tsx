import { FilterCheckbox, Title } from "@/shared/ui"

export const Filters = () => {
  return (
    <div>
        <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
        <FilterCheckbox text="Можно собирать" value="1" className="mb-1" />
        <FilterCheckbox text="Новинки" value="2" className="mb-1" />
    </div>
  )
}
