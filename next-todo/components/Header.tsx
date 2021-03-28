import styled from 'styled-components';

const Container = styled.div`
  display: flex;
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
