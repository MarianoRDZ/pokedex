import { Bar, FilledBar, Container } from './StatBar.styles';

const StatBar = ({ value, color }) => {
  const filledBarPercentage = (value * 100) / 200;
  const grayBarPercentage = 100 - filledBarPercentage;

  return (
    <Container>
      <FilledBar type={color} width={filledBarPercentage} />
      <Bar width={grayBarPercentage} />
    </Container>
  );
};

export default StatBar;
