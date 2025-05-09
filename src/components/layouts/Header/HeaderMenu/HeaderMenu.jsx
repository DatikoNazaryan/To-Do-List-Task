import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { FaMoon, FaSun } from 'react-icons/fa';

import { isDarkMode } from '../../../../store/slices/theme';

import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
  const dispatch = useDispatch();
  const isDarkThemeActive = useSelector(state => state.isDarkTheme.isDarkThemeActive);

  function handleToggleThemeBtnClick(e) {
    e.preventDefault();

    dispatch(isDarkMode());
  }

  return (
    <div className={styles.menuWrapper}>
      <button 
          type="button"
          className={cx(styles.toggleThemeBtn,{
            [styles.toggleThemeBtnActive]: isDarkThemeActive
          })}
          onClick={handleToggleThemeBtnClick}
        />
        { isDarkThemeActive ? 
            <FaMoon size={20} color='blue' /> :
            <FaSun size={20} color='blue' />
        }
    </div>
  );
}

export default HeaderMenu;