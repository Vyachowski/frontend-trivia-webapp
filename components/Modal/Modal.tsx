import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

type ModalTypes = 'nameForm';

export const Modal: React.FC<{ type: ModalTypes; isOpen: boolean }> = ({
  type,
  isOpen,
}) => {
  const renderModalContent = (type: ModalTypes) => {
    switch (type) {
      case 'nameForm':
        return (
          <>
            <div className={cx('header')}>
              <h2 className={cx(['title'])}>Enter your name or nickname</h2>
            </div>
            <div className={cx('body')}>
              <label className={cx('label')}>
                <input className={cx('input')} />
              </label>
            </div>
            <div className={cx('footer')}>
              <button className={cx('submit-button')} type="button">
                Start game
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    isOpen && (
      <div className={cx(['modal', { isOpen: 'show' }])} tabIndex={-1}>
        <div className={cx('dialog')}>
          <div className={cx('content')}>{renderModalContent(type)}</div>
        </div>
      </div>
    )
  );
};
