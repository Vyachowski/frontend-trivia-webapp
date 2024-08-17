import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { SpeakerIcon } from './SpeakerIcon/SpeakerIcon';
import { en } from '@/app/dictionaries';
import { ABOUT_LINK, RULE_LINK, FEEDBACK_LINK } from '@/app/constants';

const cx = classNames.bind(styles);

const HEADER_NAV = {
  [en.headerMenuItems.about]: ABOUT_LINK,
  [en.headerMenuItems.rules]: RULE_LINK,
  [en.headerMenuItems.feedback]: FEEDBACK_LINK,
};

export const Header = () => (
  <header className={cx('header')}>
    <div className={cx('wrapper')}>
      <nav className={cx('nav')}>
        <ul className={cx('menu')}>
          {Object.entries(HEADER_NAV).map(([key, value]) => (
            <li className={cx('menu-item')} key={key}>
              <Link className={cx('menu-link')} href={value}>
                {key.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={cx('settings-menu')}>
        <button className={cx('lang-switcher')} type="button">
          <span>EN</span>
        </button>
        <button className={cx('sound-toggle')} type="button">
          <SpeakerIcon isSoundOff />
        </button>
      </div>
    </div>
  </header>
);
