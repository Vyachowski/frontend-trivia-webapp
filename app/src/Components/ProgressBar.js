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
    { step: 15, name: 'Your first offer', status: 'pending' },
    { step: 14, name: '1 500 000', status: 'pending' },
    { step: 13, name: '800 000', status: 'pending' },
    { step: 12, name: '400 000', status: 'pending' },
    { step: 11, name: '200 000', status: 'pending' },
    { step: 10, name: 'Junior Dev', status: 'pending' },
    { step: 9, name: '50 000', status: 'pending' },
    { step: 8, name: '25 000', status: 'pending' },
    { step: 7, name: '15 000', status: 'pending' },
    { step: 6, name: '10 000', status: 'pending' },
    { step: 5, name: 'Web Dev', status: 'pending' },
    { step: 4, name: '3 000', status: 'pending' },
    { step: 3, name: '2 000', status: 'pending' },
    { step: 2, name: '1 000', status: 'pending' },
    { step: 1, name: '500', status: 'active' } // status: finished
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
