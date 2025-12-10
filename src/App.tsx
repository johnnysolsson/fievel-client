
import React from 'react';
import { Card } from './components/Card/Card';
import CardGrid from './components/CardGrid/CardGrid';

export const App: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Fievel Cards</h1>

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

      <CardGrid />
    </div>
  );
};

export default App;