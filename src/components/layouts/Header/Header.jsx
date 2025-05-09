import { useState, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import Popup from '../../common/Popup/Popup.jsx';
import IsDarkModeInpute from './IsDarkModeInput/IsDarkModeInput.jsx';

import styles from './Header.module.scss';

const AddTaskForm = lazy(() => import('../../features/AddTaskForm/addTaskForm.jsx'));

function Header() {
   const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
   const [isPopupVisible, setIsPopupVisible] = useState(false);

   const togglePopupVisibility = (ev) => {
      if(ev) {
        ev.preventDefault();
      }
  
      setIsPopupVisible(prevState => !prevState);
    };
      
      return(
         <>
            <header className={styles.header}>
                  <div className={styles.headerBlock}>
                     <div>
                        <h1 className={cx(styles.title, {
                           [styles.isDarkMode]: isDarkMode,
                        })}>
                           Basic Task List Template
                        </h1>
                     </div>
                     <button className={styles.button}  onClick={togglePopupVisibility}>
                        <span className={styles.cMain}>
                           <span className={styles.cIco}><span className={styles.cBlur}></span> <span className={styles.icoText}>+</span></span>
                           Add Task
                        </span>
                     </button>
                  </div>
                  <IsDarkModeInpute />
            </header>
         {
             isPopupVisible && (
             <Popup onClose={togglePopupVisibility}>
              <Suspense fallback={<p>Content is loading...</p>}>
                 <AddTaskForm onClose={togglePopupVisibility} />
               </Suspense>
            </Popup>
              )
            }
         </>
      );
}

export default Header;