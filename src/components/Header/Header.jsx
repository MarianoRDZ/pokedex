import { Container, HeaderTitle, HeaderSubtitle } from './Header.syles';

const Header = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Title = ({ children, ...props }) => (
  <HeaderTitle {...props}>{children}</HeaderTitle>
);

const Subtitle = ({ children, ...props }) => (
  <HeaderSubtitle {...props}>{children}</HeaderSubtitle>
);

const HeaderSearchbar = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);
Header.Searchbar = HeaderSearchbar;
Header.Title = Title;
Header.Subtitle = Subtitle;

export default Header;
