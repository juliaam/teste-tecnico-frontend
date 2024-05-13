import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends ComponentProps<'select'> {
  label?: string;
  options: { value: any; label: string }[] | undefined;
}

export default function SelectForm({ label, options, ...props }: SelectProps) {
  return (
    <div className="mb-5">
      <label>
        {label}
        <select
          {...props}
          className={twMerge(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
            props.className
          )}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
