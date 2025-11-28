
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    onEdit: { action: 'edit' },
    onArchive: { action: 'archive' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const AdminCard: Story = {
  args: {
    name: 'Linda Ruhméin',
    role: 'UX Designer',
    imageSrc: 'https://via.placeholder.com/64', // Replace with real image
    tags: [
      'UX Designer', 'UI Designer', 'Product Designer', 'SCRUM', 'Designsystem',
      'Workshops', 'Design thinking', 'WCAG', 'Accessibility', 'Figma'
    ],
    onEdit: () => {},
    onArchive: () => {},
  },
};
