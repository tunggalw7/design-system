import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: String,
    label: String,
    variant: String,
    size: String
  },
  args: {
    variant: 'primary'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Props: Story = {
  args: {
    label: 'Button',
    size: 'large'
  },
  argTypes: {
    type: {
      options: ['button', 'dropdown'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'outline', 'outline-danger', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    hover: {
      options: [true, false],
      control: { type: 'radio' },
    },
    selected: {
      options: [true, false],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};
