import styled from 'styled-components';

const QuestionPanelSection = styled.section`
  `;

const Question = styled.div`
  display: flex;
  align-items: center;
  min-height: 86px;
  padding: 0 0 0 155px;
  margin: 0 auto 20px;
  font-size: 20px;
  background-image: url('../assets/button_question.svg');
  background-repeat: no-repeat;
  filter: drop-shadow(0px 14px 34px #0D1A30);
  `;

const Answers = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  align-content: center;
  row-gap: 15px;
  padding: 0;
  margin: 0 auto 20px;
  list-style-type: none;
  filter: drop-shadow(0px 14px 34px #0D1A30);
  `;

const Answer = styled.li`
  margin: 0;
  padding: 0;
  `;

const AnswerButton = styled.button`
  width: 521px;
  height: 56px;
  background-color: transparent;
  border: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background-repeat: no-repeat;
  `;

const QuestionPanel = () => (
  <QuestionPanelSection>
    <Question>
      Do you know what is the answer?
    </Question>
    <Answers>
      <Answer key={1}>
        <AnswerButton>
          Example of answer
        </AnswerButton>
      </Answer>
      <Answer key={2}>
        <AnswerButton>
          Example of answer
        </AnswerButton>
      </Answer>
      <Answer key={3}>
        <AnswerButton>
          Example of answer
        </AnswerButton>
      </Answer>
      <Answer key={4}>
        <AnswerButton>
          Example of answer
        </AnswerButton>
      </Answer>
    </Answers>
  </QuestionPanelSection>
);

export default QuestionPanel;
