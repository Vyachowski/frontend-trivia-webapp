import styled from 'styled-components';
import ModalWindow from '../Components/ModalWindow';
import LoginForm from '../Components/LoginForm';
import Container from '../Components/Container';
import Header from '../Components/Header';
import GameBoard from '../Components/GameBoard';
import GamePanel from '../Components/GamePanel';
import QuestionPanel from '../Components/QuestionPanel';

const Separator = styled.div`
  height: 0;
  border: 2px solid #3A404E;
  border-radius: 1px;
  `;

const GamePage = () => (
  <Container>
    <Header />
    <Separator />
    <GameBoard>
      <GamePanel />
      <QuestionPanel />
    </GameBoard>
    <ModalWindow>
      <LoginForm />
    </ModalWindow>
  </Container>
);

export default GamePage;
