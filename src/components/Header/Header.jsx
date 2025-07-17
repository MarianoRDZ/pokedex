import { Container, HeaderTitle, HeaderSubtitle } from './Header.syles';

const Header = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Header.Title = ({ children, ...props }) => (
  <HeaderTitle {...props}>{children}</HeaderTitle>
);
Header.Subtitle = ({ children, ...props }) => (
  <HeaderSubtitle {...props}>{children}</HeaderSubtitle>
);

Header.Searchbar = ({ children }) => <Container>{children}</Container>;

export default Header;
