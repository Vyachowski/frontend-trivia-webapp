import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  gap: 40px;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding-top: 40px;
  padding-inline: 20px;
`;

const GameBoard = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default GameBoard;
