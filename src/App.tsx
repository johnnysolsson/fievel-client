import React from 'react';
import CardGrid from './components/CardGrid/CardGrid';

export const App: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Fievel Cards</h1>
      <CardGrid />
    </div>
  );
};

export default App;