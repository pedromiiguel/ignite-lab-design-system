import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './Signin';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta;

export const Default: StoryObj = {};
