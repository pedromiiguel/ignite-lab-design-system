import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { Text } from '../Text';

export interface CheckboxProps {
  label: string;
  id: string;
}

export function Checkbox({ label, id }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        className="w-6 h-6 p-[2px] bg-gray-800 rounded"
        id={id}
      >
        <CheckboxPrimitive.Indicator>
          <Check weight="bold" className="w-5 h-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor={id}>
        <Text size="sm">{label}</Text>
      </label>
    </div>
  );
}
