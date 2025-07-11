import Searchbar from '../Searchbar/Searchbar';
import { Container, Title, Subtitle } from './Header.syles';

const Header = () => {
  return (
    <>
      <Container>
        <Title>Pokédex</Title>
        <Subtitle>Descubrí los 151 pokemon originales!</Subtitle>
      </Container>

      <Container>
        <Searchbar />
      </Container>
    </>
  );
};

export default Header;
