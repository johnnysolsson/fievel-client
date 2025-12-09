
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    onCreate: { action: 'create' },
    onDelete: { action: 'delete' },
    onSave: { action: 'save' },
    onCancel: { action: 'cancel' },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalCard: Story = {
  args: {
    name: 'Linda Ruhmén',
    tags: [
      'UX Designer', 'UI Designer', 'Product Designer', 'SCRUM', 'Designsystem',
      'Workshops', 'Design thinking', 'WCAG', 'Accessibility', 'Figma'
    ],
    onCreate: () => {},
    onDelete: () => {},
    onSave: () => {},
    onCancel: () => {},
  },
};
