import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import Menu from '../../../common/Menu/Menu';

import { changeDoneTask } from '../../../../store/slices/taskSlice';

import styles from './Task.module.scss';

function Task({ title, description, date, id, isDone, sortBy }) {
    const dispatch = useDispatch();
    const [ isChecked, setIsChecked ] = useState(isDone);
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    const onChangeTaskDone = () => {
        dispatch(changeDoneTask(id));
        setIsChecked(prev => !prev);
    };

    return(
       <div className={styles.container}>
           <div 
              className={cx(styles.task, {
                    [styles.taskDone]: isChecked,
                    [styles.isDarkMode]: isDarkMode,
                    [styles.taskDoneDark]: isChecked && isDarkMode
              })}
           >
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.desq}>{description}</p>
                </div>
                <div className={styles.date}>
                    <p className={styles.desq}>{date}</p>
                </div>
                <div className={styles.checkBox}>
                    <input 
                            id={id} 
                            type='checkbox' 
                            defaultChecked={isDone}
                            className={styles.checkboxInput} 
                            onChange={onChangeTaskDone}
                        />
                    <label htmlFor={id}>{"Done"}</label>
                </div>
            <Menu 
              id={id} 
              title={title}
              description={description}
              sortBy={sortBy}
            />
           </div>           
       </div>
    );
}

export default Task;