import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task/Task';
import { SpinnerCircular  } from 'spinners-react';

import { taskSort } from '../../../store/slices/taskSlice';
import { sortData } from '../../../helpers/sortData';

import styles from './TaskList.module.scss';

function TaskList({ sortBy , filterBy }) {
    const dispatch = useDispatch();
    const taskList = useSelector(store => store.tasks.taskList);
    const sortedTaskList = useSelector(store => store.tasks.sortedTaskList);
    const loading = useSelector(store => store.tasks.loading);

    const sortTask = (sort) => {
        if(filterBy === "All"){
          dispatch(taskSort(sortData(taskList, sort)));
        } else if (filterBy === "Pending") {
          dispatch(taskSort(sortData(taskList.filter(task => !task.isDone), sort)));
        } else if (filterBy === "Done") {
          dispatch(taskSort(sortData(taskList.filter(task => task.isDone), sort)));
        }
    };

    useEffect(() => {
      sortTask(sortBy);
    }, [sortBy, taskList, filterBy]);

    if(loading) return (
      <div className={styles.spiner}>
        <SpinnerCircular size={50} color="blue" />
      </div>
    );
    
    return(
        sortedTaskList.length ? 
        <div className={styles.taskList}>
          {
            sortedTaskList.map(task => (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                date={task.creationDate}
                id={task.id}
                isDone={task.isDone}
                sortBy={sortBy}
              />
           ))
          }
        </div>  :
        <p className={styles.notTask}>There are no task in the system yet</p>
    );
}

export default TaskList;