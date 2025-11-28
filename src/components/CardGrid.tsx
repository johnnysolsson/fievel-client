
import React from 'react';
import { Card } from './Card';

export const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card
        title='Eulalia'
        imageSrc='https://img.icons8.com/?size=100&id=21114&format=png&color=000000'
        imageAlt='Example cover image'
        children='Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
        tags={['React', 'TypeScript', 'Storybook', 'Tailwind', 'UI', 'Design', 'Frontend', 'Components', 'Testing', 'Docs']}>
      </Card>
      <Card
        title='Hyacinth Bucket'
        imageSrc='https://img.icons8.com/?size=100&id=21114&format=png&color=000000'
        imageAlt='Example cover image'
        children='Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
        tags={['React', 'TypeScript', 'Storybook', 'Tailwind', 'UI', 'Design', 'Frontend', 'Components', 'Testing', 'Docs']}>          
      </Card>
      <Card
        title='Lasse Kongo'
        imageSrc='https://img.icons8.com/?size=100&id=21441&format=png&color=000000'
        imageAlt='Example cover image'
        children='Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
        tags={['React', 'TypeScript', 'Storybook', 'Tailwind', 'UI', 'Design', 'Frontend', 'Components', 'Testing', 'Docs']}>          
      </Card>
    </div>
  );
};
