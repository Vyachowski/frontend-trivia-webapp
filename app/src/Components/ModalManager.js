import LoginForm from './LoginForm';
import AboutText from './AboutText';

const ModalManager = () => {
  const type = 'login';

  switch (type) {
    case 'login':
      return <LoginForm />;
    case 'aboutPage':
      return <AboutText />;
    case 'feedbackPage':
      return 3;
    case 'winMessage':
      return 4;
    case 'looseMessage':
      return 5;
    default:
      return 'No such page, please try again';
  }
};

export default ModalManager;
