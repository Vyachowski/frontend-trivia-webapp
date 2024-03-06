import Container from '../Components/Container';
import Header from '../Components/Header';
import GameBoard from '../Components/GameBoard';
import GamePanel from '../Components/GamePanel';
import QuestionPanel from '../Components/QuestionPanel';

const GamePage = () => {
  return (
    <Container>
      <Header />
      <div className='separator'/>
      <GameBoard>
        <GamePanel />
        <QuestionPanel />
      </GameBoard>
    </Container>
  );
};

export default GamePage;
