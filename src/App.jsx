import React from 'react';

import List from './components/List/List';
const PokemonModal = React.lazy(
  () => import('./components/Modal/PokemonModal.jsx')
);
import Header from './components/Header/Header.jsx';
import { GlobalStyles } from './styles/GlobalStyles';
import { Container } from './App.styles.js';

function App() {
  return (
    <Container>
      <Header />
      <GlobalStyles />
      <List />
      <PokemonModal />
    </Container>
  );
}

export default App;
