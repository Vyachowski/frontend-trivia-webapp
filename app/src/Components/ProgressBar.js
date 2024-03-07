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

const ProgressStepSum = styled.span`
  color: #e4903f;
  `;

const ProgressBar = () => {
  const progress = [
    {
      step: 15, name: 'Your first offer', status: 'pending', isBurnable: true
    },
    {
      step: 14, name: '1 500 000', status: 'pending', isBurnable: true
    },
    {
      step: 13, name: '800 000', status: 'pending', isBurnable: true
    },
    {
      step: 12, name: '400 000', status: 'pending', isBurnable: true
    },
    {
      step: 11, name: '200 000', status: 'pending', isBurnable: true
    },
    {
      step: 10, name: 'Junior Dev', status: 'pending', isBurnable: false
    },
    {
      step: 9, name: '50 000', status: 'pending', isBurnable: true
    },
    {
      step: 8, name: '25 000', status: 'pending', isBurnable: true
    },
    {
      step: 7, name: '15 000', status: 'pending', isBurnable: true
    },
    {
      step: 6, name: '10 000', status: 'pending', isBurnable: true
    },
    {
      step: 5, name: 'Web Dev', status: 'pending', isBurnable: false
    },
    {
      step: 4, name: '3 000', status: 'pending', isBurnable: true
    },
    {
      step: 3, name: '2 000', status: 'pending', isBurnable: true
    },
    {
      step: 2, name: '1 000', status: 'pending', isBurnable: true
    },
    {
      step: 1, name: '500', status: 'active', isBurnable: false
    } // status: finished
  ];

  return (
    <ProgressBarWrapper>
      <ProgressList>
        {progress.map(({ step, name, isBurnable }) => (
          <ProgressItem key={step}>
            <ProgressStepNumber>
              {step}
            </ProgressStepNumber>
            <ProgressStepSum style={!isBurnable ? { color: '#ffffff' } : null}>
              {name}
            </ProgressStepSum>
          </ProgressItem>
        ))}
      </ProgressList>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
