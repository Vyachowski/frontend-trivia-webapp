import styled from 'styled-components';

const ScoreBoardSection = styled.section`
  background-color: #232a3a80;
  border-radius: 10px;
  border: 2px solid #3A404E;
  box-shadow: 0px 4px 4px 0px #00000040;
  `;

const ScoreBoardHeader = styled.header`
  padding: 22px 26px;
  font-size: 24px;
  border-bottom: 2px solid #2F394C;
  `;

const ScoreBoardMain = styled.main`
  padding-top: 22px;
  `;

const ScoreBoardList = styled.ul`
  magin: 0;
  padding: 0;
  list-style-type: none;
  `;

const ScoreBoardItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  min-height: 38px;
  padding: 11px 20px;
  font-size: 16px;
  `;

const ScoreBoard = () => {
  const players = [{ nickname: 'Kurwa', id: 1 }, { nickname: 'Bobr', id: 2 }];

  return (
    <ScoreBoardSection>
      <ScoreBoardHeader>
        Scoreboard
      </ScoreBoardHeader>
      <ScoreBoardMain>
        <ScoreBoardList>
          {players.map(({ nickname, index }) => (
            <ScoreBoardItem key={index}>
              <span>0</span>
              <span>{nickname}</span>
            </ScoreBoardItem>
          ))}
        </ScoreBoardList>
      </ScoreBoardMain>
    </ScoreBoardSection>
  );
};

export default ScoreBoard;
