import styled from 'styled-components';

const Main = styled.main`
  padding-block: 42px;
`;

const GameBoard = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default GameBoard;
