import styles from './Page.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <p className={cx('page-wrapper')}>
      A 15-step trivia game where players must answer challenging questions on
      JavaScript, CSS, and HTML to reach the final stage. Test your coding
      knowledge and climb to the top! You have three lifelines: 50/50 to remove
      two incorrect options, &quot;Google It&quot; for a quick search, and AI
      assistance for expert help.
    </p>
  );
}
