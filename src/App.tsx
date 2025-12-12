import React from 'react';
import CardGrid from './components/CardGrid/CardGrid';

export const App: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <CardGrid />
    </div>
  );
};

export default App;