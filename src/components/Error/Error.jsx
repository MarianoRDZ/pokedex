import { Container } from './Error.styles';

const Error = ({ error }) => {
  return (
    <Container role="alert" aria-label="error-message">
      <h2>Oops!</h2>
      <p>{error}</p>
    </Container>
  );
};

export default Error;
