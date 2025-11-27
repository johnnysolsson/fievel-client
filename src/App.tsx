
import React from 'react';
import { Card } from './components/Card';
import { CardGrid } from './components/CardGrid';

export const App: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Fievel Cards</h1>

      <Card title="Standalone Card" variant="default">
        This is a single card in the app.
      </Card>

      <CardGrid />
    </div>
  );
};

export default App;