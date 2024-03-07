import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import InfoBoard from './InfoBoard';
import ProgressBar from './ProgressBar';

const GamePanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 55px;
  width: 95%;
  max-height: 480px;
  margin: 0 auto;
  `;

const GamePanel = () => (
  <GamePanelWrapper>
    <ScoreBoard />
    <InfoBoard />
    <ProgressBar />
  </GamePanelWrapper>
);

export default GamePanel;
