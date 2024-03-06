import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import InfoBoard from './InfoBoard';
import ProgressBar from './ProgressBar';

const PanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const GamePanel = () => (
  <PanelWrapper>
    <ScoreBoard />
    <InfoBoard />
    <ProgressBar />
  </PanelWrapper>
);

export default GamePanel;
