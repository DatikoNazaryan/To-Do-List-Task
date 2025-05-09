import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import addDataLocalStorage from '../../../helpers/addTasksLocalStorage';
import { getCarsDate } from '../../../helpers/getTasksDate';
import { fetchTasksDataAsync } from '../../../store/slices/taskSlice';

import styles from './addTaskForm.module.scss';



function addTaskForm({ onClose }) {
    const dispatch = useDispatch()
    const [ values, setValues ] = useState({
        title: "",
        description: "",
    });
    const taskList = useSelector(store => store.tasks.taskList);

    const handleTaskDataSubmit = (e) => {
        e.preventDefault();

        addDataLocalStorage("tasks", {
            ...values,
            creationDate: getCarsDate(),
            sortData: Date(),
            isDone: false,
            id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1 ,
        });
        
        dispatch(fetchTasksDataAsync());
        onClose();
    };


    return(
        <form className={styles.form} onSubmit={(e) => handleTaskDataSubmit(e)}>
            <div>
               <label htmlFor="title">Title</label><br></br>
               <input id="title" className={styles.input} type='text' onChange={(e) => (
                  setValues({
                    ...values,
                    title: e.target.value,
                  })
               )} />
            </div>
             <div>
                <label htmlFor="description">Description</label><br></br>
                <textarea  id="description"
                  onChange={(e) => (
                    setValues({
                      ...values,
                      description: e.target.value,
                    })
                 )}
                ></textarea>
             </div>
             <div className={styles.btnBlock}>
                <button 
                  disabled={!values.description || !values.title ? true : false}
                  className={styles.btn} 
                  type='submit'>
                   Create
                </button>
             </div>
        </form>
    );
}

export default addTaskForm;