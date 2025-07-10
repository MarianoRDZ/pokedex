import { Container, Background, Image } from './Sprite.styles.js';

export const VARIANT = {
  sm: {
    image: {
      width: 80,
      height: 80,
    },
    background: {
      width: 100,
      height: 100,
    },
  },
  xl: {
    image: {
      width: 150,
      height: 150,
    },
    background: {
      width: 170,
      height: 170,
    },
  },
};

const Sprite = ({ src, alt, variant }) => {
  return (
    <Container>
      <Background
        width={variant.background.width}
        height={variant.background.height}
      >
        <Image
          src={src}
          alt={alt}
          width={variant.image.width}
          height={variant.image.height}
        />
      </Background>
    </Container>
  );
};

export default Sprite;
