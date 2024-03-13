import LoginForm from './LoginForm';

const ModalManager = () => {
  const type = 'login';

  switch (type) {
    case 'login':
      return <LoginForm />;
    case 'aboutPage':
      return 2;
    case 'feedbackPage':
      return 3;
    case 'winMessage':
      return 4;
    case 'looseMessage':
      return 5;
    default:
      return 'No such page';
  }
};

export default ModalManager;
