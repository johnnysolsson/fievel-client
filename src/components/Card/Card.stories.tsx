
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    onEdit: { action: 'edit' },
    onPause: { action: 'archive' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const ProfileCard: Story = {
  args: {
    name: 'Linda Ruhméin',
    role: 'UX Designer',
    imageSrc: 'https://54u.se/wp-content/uploads/2025/08/Linda_Ruhmen-300x300.jpg', // Replace with real image
    tags: [
      'UX Designer', 'UI Designer', 'Product Designer', 'SCRUM', 'Designsystem',
      'Workshops', 'Design thinking', 'WCAG', 'Accessibility', 'Figma'
    ],
    onEdit: () => {},
    onPause: () => {},
  },
};
