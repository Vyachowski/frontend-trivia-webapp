import styled from 'styled-components';

const ProgressBarWrapper = styled.section`
  `;

const ProgressList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const ProgressItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 24px;
  `;

const ProgressStepNumber = styled.span`
  min-width: 25px;
  color: #3a404e;
  `;

const ProgressStepPoints = styled.span`
  color: #e4903f;
  `;

const ProgressBar = () => {
  const progress = [
    {
      step: 15, points: 'Your first offer', status: 'pending', isBurnable: true
    },
    {
      step: 14, points: '1 500 000', status: 'pending', isBurnable: true
    },
    {
      step: 13, points: '800 000', status: 'pending', isBurnable: true
    },
    {
      step: 12, points: '400 000', status: 'pending', isBurnable: true
    },
    {
      step: 11, points: '200 000', status: 'pending', isBurnable: true
    },
    {
      step: 10, points: 'Junior Dev', status: 'pending', isBurnable: false
    },
    {
      step: 9, points: '50 000', status: 'pending', isBurnable: true
    },
    {
      step: 8, points: '25 000', status: 'pending', isBurnable: true
    },
    {
      step: 7, points: '15 000', status: 'pending', isBurnable: true
    },
    {
      step: 6, points: '10 000', status: 'pending', isBurnable: true
    },
    {
      step: 5, points: 'Web Dev', status: 'pending', isBurnable: false
    },
    {
      step: 4, points: '3 000', status: 'pending', isBurnable: true
    },
    {
      step: 3, points: '2 000', status: 'pending', isBurnable: true
    },
    {
      step: 2, points: '1 000', status: 'pending', isBurnable: true
    },
    {
      step: 1, points: '500', status: 'active', isBurnable: false
    } // status: finished
  ];

  return (
    <ProgressBarWrapper>
      <ProgressList>
        {progress.map(({ step, points, isBurnable }) => (
          <ProgressItem key={step}>
            <ProgressStepNumber>
              {step}
            </ProgressStepNumber>
            <ProgressStepPoints style={!isBurnable ? { color: '#ffffff' } : null}>
              {points}
            </ProgressStepPoints>
          </ProgressItem>
        ))}
      </ProgressList>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
