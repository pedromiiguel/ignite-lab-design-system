import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: 'Create account' });
    expect(button).toHaveClass('bg-cyan-500');
  },
};
