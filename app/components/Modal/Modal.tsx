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
            <div className={cx('modal-header')}>
              <h2 className={cx(['modal-title'])}>
                Enter your name or nickname
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>My name or nickname</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
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
      <div className="modal fade" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">{renderModalContent(type)}</div>
        </div>
      </div>
    )
  );
};
