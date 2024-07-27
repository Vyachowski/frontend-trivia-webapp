import Link from 'next/link';
import styles from './Header.module.scss';
import { SpeakerIcon } from './SpeakerIcon/SpeakerIcon';

const ABOUT_LINK = '/about';
const RULE_LINK = '/rules';
const FEDBACK_LINK = '/feedback';

const NAV_CONFIG = {
  about: ABOUT_LINK,
  rules: RULE_LINK,
  feedback: FEDBACK_LINK,
};

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {Object.entries(NAV_CONFIG).map(([key, value]) => (
            <li key={key}>
              <Link href={value}>{key.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button">
        <SpeakerIcon isSoundOff />
      </button>
    </div>
  </header>
);
