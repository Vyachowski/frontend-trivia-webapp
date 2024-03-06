import styled from 'styled-components';

const ProgressBarWrapper = styled.section`
  `;

const ProgressList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const ProgressItem = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  `;

const ProgressBar = () => {
  const progress = [
    { step: 15, name: 'Your first offer' },
    { step: 14, name: '1 500 000' },
    { step: 13, name: '800 000' },
    { step: 12, name: '400 000' },
    { step: 11, name: '200 000' },
    { step: 10, name: 'Junior Dev' },
    { step: 9, name: '50 000' },
    { step: 8, name: '25 000' },
    { step: 7, name: '15 000' },
    { step: 6, name: '10 000' },
    { step: 5, name: 'Web Dev' },
    { step: 4, name: '3 000' },
    { step: 3, name: '2 000' },
    { step: 2, name: '1 000' },
    { step: 1, name: '500' }
  ];

  return (
    <ProgressBarWrapper>
      <ProgressList>
        {progress.map(({ step, name }) => (
          <ProgressItem key={step}>{name}</ProgressItem>
        ))}
      </ProgressList>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
