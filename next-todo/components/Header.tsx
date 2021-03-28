import styled from 'styled-components';
import palette from '../styles/palette';
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${palette.gray};
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  h1 {
    font-size: 21px;
  }
`;

const Header = () => {
  const name = 'starpro123';
  return (
    <Container>
      <h1>{`${name}'s TodoList`}</h1>
    </Container>
  );
};

export default Header;
