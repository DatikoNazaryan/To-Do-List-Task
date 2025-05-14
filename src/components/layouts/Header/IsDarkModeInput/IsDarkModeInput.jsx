import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { FaMoon, FaSun } from 'react-icons/fa';

import { isDarkMode } from '../../../../store/slices/theme';

import styles from './IsDarkModeInput.module.scss'

function IsDarkModeInpute() {
  const dispatch = useDispatch();
  const isDarkThemeActive = useSelector(state => state.isDarkTheme.isDarkThemeActive);

  function handleToggleThemeBtnClick(e) {
    e.preventDefault();

    dispatch(isDarkMode());
  }

  return (
    <div className={styles.menuWrapper} onClick={handleToggleThemeBtnClick}>
      <button 
          type="button"
          className={cx(styles.toggleThemeBtn,{
            [styles.toggleThemeBtnActive]: isDarkThemeActive
          })}
        />
        { isDarkThemeActive ? 
            <FaMoon size={20} color='#ffffff' /> :
            <FaSun size={20} color="#fcd34d" />
        }
    </div>
  );
}

export default IsDarkModeInpute;