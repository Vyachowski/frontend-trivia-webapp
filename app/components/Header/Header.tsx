import Link from 'next/link';
import styles from './Header.module.scss';
import { SpeakerIcon } from './SpeakerIcon/SpeakerIcon';
import { en } from '@/app/dictionaries';
import { ABOUT_LINK, RULE_LINK, FEEDBACK_LINK } from '@/app/constants';

const HEADER_NAV = {
  [en.headerMenuItems.about]: ABOUT_LINK,
  [en.headerMenuItems.rules]: RULE_LINK,
  [en.headerMenuItems.feedback]: FEEDBACK_LINK,
};

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {Object.entries(HEADER_NAV).map(([key, value]) => (
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
