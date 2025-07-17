import List from './components/List/List';
import PokemonModal from './components/Modal/PokemonModal.jsx';
import Header from './components/Header/Header.jsx';
import { Container } from './App.styles.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';

function App() {
  return (
    <Container>
      <Header>
        <Header.Title>Pokedex</Header.Title>
        <Header.Subtitle>Descubrí los 151 pokemon originales!</Header.Subtitle>
        <Header.Searchbar>
          <Searchbar />
        </Header.Searchbar>
      </Header>
      <List />
      <PokemonModal>
        <PokemonModal.Header />
        <PokemonModal.Body />
      </PokemonModal>
    </Container>
  );
}

export default App;
