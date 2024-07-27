import Link from 'next/link';
import styles from './Header.module.scss';
import { SpeakerIcon } from './SpeakerIcon/SpeakerIcon';
import { ABOUT_LINK, RULE_LINK, FEEDBACK_LINK } from '@/src/constants';

const NAV_CONFIG = {
  about: ABOUT_LINK,
  rules: RULE_LINK,
  feedback: FEEDBACK_LINK,
};

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {Object.entries(NAV_CONFIG).map(([key, value]) => (
            <li className={styles['menu-item']} key={key}>
              <Link className={styles['menu-link']} href={value}>
                {key.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles['settings-menu']}>
        <button className={styles['lang-switcher']} type="button">
          <span>EN</span>
        </button>
        <button className={styles['sound-toggle']} type="button">
          <SpeakerIcon isSoundOff />
        </button>
      </div>
    </div>
  </header>
);
