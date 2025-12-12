import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardGrid from './CardGrid';

const meta: Meta<typeof CardGrid> = {
  title: 'Components/CardGrid',
  component: CardGrid,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof CardGrid>;

export const Default: Story = {
  render: () => (
    <div className="bg-[#f7faf9] p-8 min-h-screen">
      <CardGrid />
    </div>
  ),
};
