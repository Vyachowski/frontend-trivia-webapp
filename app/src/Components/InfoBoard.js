import styled from 'styled-components';

const BoardWrapper = styled.section`
  `;

const Hints = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const Hint = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 48px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  background-image: url('../assets/ellipse.svg');
  background-repeat: no-repeat;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition-duration: 0.5s;

  &:hover {
    background-image: url('../assets/ellipse_active.svg');
  }
  `;

const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  `;

const TimerCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  border-radius: 50%;
  filter: drop-shadow(0px 14px 34px #0D1A30);
  `;

const TimerInnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  `;

const TimerCardFrontSide = styled.div`
  background-color: transparent;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  `;

const TimerCardBackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-windows-color);
  color: white;
  border-radius: 50%;
  border: 6px solid #E4903F;
  transform: rotateY(180deg);
  fill: #232A3A;
  stroke-width: 6px;
  stroke: #384358;
  `;
const TimerCardNumber = styled.span`
  color: #9DA6B7;
  font-size: 72px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  `;

const InfoBoard = () => (
  <BoardWrapper>
    <Hints>
      <Hint>
        50:50
      </Hint>
      <Hint>
        1
      </Hint>
      <Hint>
        1
      </Hint>
    </Hints>
    <Timer>
      <TimerCard>
        <TimerInnerCard>
          <TimerCardFrontSide>
            <img src="assets/logo.svg" style={{ width: '300px', height: '300px' }} alt="Avatar" />
          </TimerCardFrontSide>
          <TimerCardBackSide>
            <TimerCardNumber>
              1:00
            </TimerCardNumber>
          </TimerCardBackSide>
        </TimerInnerCard>
      </TimerCard>
    </Timer>
  </BoardWrapper>
);

export default InfoBoard;
