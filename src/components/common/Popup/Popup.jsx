import { createPortal } from 'react-dom';

import { FaTimes } from 'react-icons/fa';

import styles from './Popup.module.scss';

function Popup({ children, onClose, className }) {
  const popupPlaceholder = document.getElementById('popupPlaceholder');

  const element = (
    <dialog className={styles.container}>
      <div className={className ? className : styles.content}>
        {children}
        <FaTimes className={styles.closeIcon} size={20} color="#ccc" onClick={onClose} />
      </div>
    </dialog>
  );

  return createPortal(element, popupPlaceholder);
}

export default Popup;