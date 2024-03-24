import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import DeviceWarningMessage from '../Components/DeviceWarningMessage';
import QuestionPanel from '../Components/QuestionPanel';
import ModalManager from '../Components/ModalManager';
import ModalWindow from '../Components/ModalWindow';
import Container from '../Components/Container';
import GameBoard from '../Components/GameBoard';
import GamePanel from '../Components/GamePanel';
import Header from '../Components/Header';

const Separator = styled.div`
  height: 0;
  border: 2px solid #3A404E;
  border-radius: 1px;
  `;

const GamePage = () => (
  !isMobile
    ? <DeviceWarningMessage />
    : (
      <Container>
        <Header />
        <Separator />
        <GameBoard>
          <GamePanel />
          <QuestionPanel />
        </GameBoard>
        <ModalWindow>
          <ModalManager />
        </ModalWindow>
      </Container>
    )
);

export default GamePage;
