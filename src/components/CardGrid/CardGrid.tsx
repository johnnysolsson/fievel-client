
import React from 'react';
import { Card } from '../Card';

export const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
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
  );
};
