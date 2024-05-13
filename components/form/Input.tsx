import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  type?: string;
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium dark:text-white">
        {label}
        <input
          {...props}
          className={twMerge(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
            props.className
          )}
        />
      </label>
    </div>
  );
}
