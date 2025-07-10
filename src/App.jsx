import List from './components/List/List';
import PokemonModal from './components/Modal/PokemonModal';
import { GlobalStyles } from './styles/GlobalStyles';
import { Container } from './App.styles.js';

function App() {
  return (
    <Container>
      <h1>Pokedex</h1>
      <GlobalStyles />
      <List />
      <PokemonModal />
    </Container>
  );
}

export default App;
