import { FC } from 'react';

import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type PopupOption = {
  value: string;
  label: string;
}

type SortPopupProps = {
  title?: string;
  value?: string;
  options: PopupOption[];
  className?: string;
  onChange?: (value: string) => void;
}

export const SortPopup: FC<SortPopupProps> = ({
  title = 'Сортировка',
  value,
  options,
  className,
  onChange,
}) => {
  const selectedOption =
    options.find((option) => option.value === value) ??
    options[0];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5',
            className,
          )}
        >
          <ArrowUpDown className="h-4 w-4" />

          <b>{title}:</b>

          <b className="text-primary">
            {selectedOption?.label}
          </b>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[240px] p-1">
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => onChange?.(option.value)}
              className={cn(
                'cursor-pointer rounded-md p-2 px-4 transition-colors',
                'hover:bg-secondary hover:text-primary',
                value === option.value &&
                  'bg-secondary text-primary font-medium',
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};