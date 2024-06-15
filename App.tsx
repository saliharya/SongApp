import React from 'react';
import { FavoritesProvider } from './contexts/FavoritesContext';
import MainStack from './navigation/MainStack';

const App = () => {
  return (
    <FavoritesProvider>
      <MainStack />
    </FavoritesProvider>
  );
};

export default App;
