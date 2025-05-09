import { useState, Suspense,lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import Popup from '../Popup/Popup';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { deleteTask } from '../../../store/slices/taskSlice';

import styles from './Menu.module.scss';

const UptadeTask = lazy(() => import('../../features/UpdateTask/UpdateTask'));

function Menu ({id, title, description, sortBy}) {
  const dispatch = useDispatch();
   const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
  const [ openManu, setOpenManu ] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

   const togglePopupVisibility = (ev) => {
      if(ev) {
        ev.preventDefault();
      }
  
      setIsPopupVisible(prevState => !prevState);
      setOpenManu(false);
    };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

    return(
         <>
            <div
            className={cx(styles.openManu, {
                    [styles.chackedMenu]: openManu,
                  })} 
            onClick={() => setOpenManu(prev => !prev)}
            >
                <div className={cx(styles.manuIcon, {
                  [styles.isDarkMode]: isDarkMode,
                })}></div>
                <div className={cx(styles.manuIcon, {
                  [styles.isDarkMode]: isDarkMode,
                })}></div>
                <div className={cx(styles.manuIcon, {
                  [styles.isDarkMode]: isDarkMode,
                })}></div>
            </div>
            {
              openManu && (
                <div className={styles.manu}>
                  <button className={styles.iconBtn} onClick={togglePopupVisibility}>
                     <FaEdit size={20} color="blue" title="Edit" />
                  </button>
                  <button className={styles.iconBtn} onClick={handleDelete}>
                      <FaTrash size={20} color="red" title="Delete" />
                  </button>
                </div>
              )
            }
            {
             isPopupVisible && (
             <Popup onClose={togglePopupVisibility}>
              <Suspense fallback={<p>Content is loading...</p>}>
                 <UptadeTask 
                   onClose={togglePopupVisibility} 
                   id={id}
                   title={title}
                   description={description}
                   sortBy={sortBy}
                />
               </Suspense>
            </Popup>
              )
            }
         </>
    );
}

export default Menu;