import styled from 'styled-components';

const ProgressBarWrapper = styled.aside`
  `;

const ProgressList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  width: 252px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const ProgressItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 216px;
  height: 32px;
  padding-left: 25px;
  background-repeat: no-repeat;
  `;

const ProgressStepNumber = styled.span`
  display: block;
  width: 30px;
  text-align: right;
  font-size: 20px;
  font-weight: 400;
  margin-right: 28px;
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

  const getCustomStyles = (status, isBurnable) => {
    const customStyles = {};
    if (status === 'active') {
      customStyles.color = '#1e2633';
    } else if (!isBurnable) {
      customStyles.color = '#ffffff';
    }
    return customStyles;
  };

  return (
    <ProgressBarWrapper>
      <ProgressList>
        {progress.map(({
          step, points, status, isBurnable
        }) => (
          <ProgressItem
            key={step}
            style={status === 'active' ? { backgroundImage: 'url(\'../assets/progress_mark.svg\')' } : null}
          >
            <ProgressStepNumber style={status === 'active' ? { color: '#ffffff' } : null}>
              {step}
            </ProgressStepNumber>
            <ProgressStepPoints
              style={getCustomStyles(status, isBurnable)}
            >
              {points}
            </ProgressStepPoints>
          </ProgressItem>
        ))}
      </ProgressList>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
