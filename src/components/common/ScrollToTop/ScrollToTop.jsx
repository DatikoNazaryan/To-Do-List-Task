import { useSelector } from 'react-redux';
import cx from 'classnames';

import { FaArrowUp } from 'react-icons/fa';

import styles from './ScrollToTop.module.scss';

function ScrollToTop({ visible }) {
  const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cx(styles.scrollToTop, {
          [styles.show]: visible,
          [styles.isDarkMode]: isDarkMode,
      })}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
