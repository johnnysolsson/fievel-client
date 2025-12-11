import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import CardGrid from './CardGrid';
import { Modal } from '../Modal';

const meta: Meta<typeof Card> = {
  title: 'Layouts/CardGrid',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const ProfileCardsGridStory = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <CardGrid />
        {modalOpen && (
          <Modal
            name=""
            role=""
            imageSrc=""
            tags={[]}
            onCancel={() => setModalOpen(false)}
            onSave={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export const ProfileCardsGrid: Story = {
  render: () => <ProfileCardsGridStory />,
};