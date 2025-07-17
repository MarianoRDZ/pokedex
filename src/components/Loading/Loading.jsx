import {
  Container,
  Pokeball,
  PokeballButton,
  LoadingText,
} from './Loading.styles';

const Loading = () => {
  return (
    <Container>
      <LoadingText>Loading Pokémons...</LoadingText>

      <Pokeball>
        <PokeballButton />
      </Pokeball>
    </Container>
  );
};

export default Loading;
