
import type { Meta, StoryObj } from '@storybook/react';
import { CardGrid } from '../CardGrid';

const meta = {
  title: 'Layouts/CardGrid',
  component: CardGrid,
  tags: ['autodocs'], // ✅ enables autodocs
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
