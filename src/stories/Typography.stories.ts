import type { Meta, StoryObj } from 'storybook/react';
import { Typography } from './Typography';

const meta = {
    title: 'Typography',
    component: Typography,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof String>
export default meta

type Story = StoryObj<typeof meta>;

export const Headers: Story = {
    args: {
      text: 'Typing Octo',
    },
  };