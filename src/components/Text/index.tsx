import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : 'span';

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md',
  };

  return (
    <Component
      className={clsx('text-gray-100 font-sans', sizes[size], className)}
    >
      {children}
    </Component>
  );
}
