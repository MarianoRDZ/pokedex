import StatBar from '../StatBar/StatBar';
import { Container, Info, StatName, StatValue } from './Stats.styles';

const Stats = ({ name, value, type }) => {
  return (
    <Container>
      <Info>
        <StatName>{name}</StatName>
        <StatValue>{value}</StatValue>
      </Info>
      <StatBar value={value} color={type.name} />
    </Container>
  );
};

export default Stats;
