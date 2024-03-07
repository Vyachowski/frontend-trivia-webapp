import styled from 'styled-components';

const BoardWrapper = styled.section`
  `;

const HintList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const HintItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 80px;
  height: 44px;
  flex-shrink: 0;
  border: 2px solid #3A404E;
  border-radius: 60px;
  background-color: #2A3344;
  `;
const Timer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-block: auto;
  width: 288px;
  height: 288px;
  border: 6px solid #384358;
  border-radius: 50%;
  background-color: #232A3A;
  `;

// const Time = styled.span`
//   font-size: 72px;
//   font-weight: 100;
//   text-align: center;
//   `;

const InfoBoard = () => (
  <BoardWrapper>
    <HintList>
      <HintItem>
        50:50
      </HintItem>
      <HintItem>
        1
      </HintItem>
      <HintItem>
        1
      </HintItem>
    </HintList>
    <Timer>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="images/logo.svg" alt="Avatar" style={{ width: 300, height: 300 }} />
          </div>
          <div className="flip-card-back">
            <p className="flip-card-back-number">1:00</p>
          </div>
        </div>
      </div>
    </Timer>
  </BoardWrapper>
);

export default InfoBoard;
