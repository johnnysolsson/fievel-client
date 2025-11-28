
// src/components/CardGrid/CardsGrid.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'Layouts/CardGrid',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-[#f7faf9]">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <button className="px-14 py-2 text-xl font-light text-white bg-[#6B1E1E] rounded-3xl hover:bg-[#5A1818] focus:outline-none focus:ring-2 focus:ring-[#6B1E1E]">Lägg till anställd</button>
        <div className="pt-8">
          <Card
            name="Linda Ruhmén"
            role="UX Designer"
            imageSrc="https://54u.se/wp-content/uploads/2025/08/Linda_Ruhmen-300x300.jpg"
            tags={['UX Designer', 'UI Designer', 'Product Designer', 'SCRUM', 'Designsystem',
            'Workshops', 'Design thinking', 'WCAG', 'Tillgänglighet', 'Figma', 'Prototyper', 'Google Analytics', 'Optimizely', 'ChatGPT', 'Lovable',
            'Figma', 'Prototyper', 'Google Analytics', 'Optimizely', 'ChatGPT', 'Lovable']}
            onEdit={() => {}}
            onArchive={() => {}}
            >
          </Card>
          <Card
            name="Morgan Söderqvist"
            role="UX Designer"
            imageSrc="https://54u.se/wp-content/uploads/2024/04/morgan_s.png"
            tags={['UX', 'Product Owner', 'Product Designer']}
            onEdit={() => {}}
            onArchive={() => {}}
            >
          </Card>
          <Card
            name="Johnny Olsson"
            role="UX Designer"
            imageSrc="https://54u.se/wp-content/uploads/2021/12/Johnny_02-300x300.jpg"
            tags={['Frontendutvecklare', 'Backendutvecklare', 'Fullstack', 'DevOps', 'Scrum Master', 'Agile Coach']}
            onEdit={() => {}}
            onArchive={() => {}}
            >
          </Card>
        </div>
      </div>
    </div>
  ),
};
