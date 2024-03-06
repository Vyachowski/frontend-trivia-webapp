import Header from '../Components/Header';
import GameBoard from '../Components/GameBoard';
import GamePanel from '../Components/GamePanel';
import QuestionPanel from '../Components/QuestionPanel';

const GamePage = () => {
  const text = 'text';

  return (
    <>
      <Header />
      <GameBoard>
        <GamePanel />
        {text}
        <QuestionPanel />
      </GameBoard>
    </>
  );
};

export default GamePage;
