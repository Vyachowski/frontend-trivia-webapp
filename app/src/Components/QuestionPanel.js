import styled from 'styled-components';

const QuestionPanelWrapper = styled.section`
  `;

const Question = styled.div`

  `;

const Answers = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const Answer = styled.li`
  margin: 0;
  padding: 0;
  `;

const AnswerButton = styled.button`
  all: unset;
  cursor: pointer;
  `;

const QuestionPanel = () => (
  <QuestionPanelWrapper>
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
  </QuestionPanelWrapper>
);

export default QuestionPanel;
