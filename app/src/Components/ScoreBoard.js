import styled from 'styled-components';

const ScoreBoardWrapper = styled.aside`
  min-width: 252px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #232a3a80;
  border-radius: 10px;
  border: 2px solid #3A404E;
  `;

const ScoreBoardHeader = styled.h2`
  margin: 0;
  padding: 15px 26px;
  border-bottom: 2px solid #2F394C;
  font-weight: 400;
  font-size: 24px;
  `;

const ScoreBoardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  max-height: 450px;
  margin: 0;
  padding: 18px 0 0;
  list-style-type: none;
  `;

const ScoreBoardItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  padding: 11px 20px;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    color: rgb(52, 105, 195);
    background-color: rgb(44, 52, 71);
  }
  `;

const UserPic = styled.img`
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  `;

const ScoreBoard = () => {
  const players = [{ nickname: 'Kurwa', id: 1 }, { nickname: 'Bobr', id: 2 }];

  return (
    <ScoreBoardWrapper>
      <ScoreBoardHeader>
        Scoreboard
      </ScoreBoardHeader>
      <ScoreBoardList>
        {players.map(({ nickname, id }) => (
          <ScoreBoardItem key={id}>
            <UserPic />
            <span>{nickname}</span>
          </ScoreBoardItem>
        ))}
      </ScoreBoardList>
    </ScoreBoardWrapper>
  );
};

export default ScoreBoard;
