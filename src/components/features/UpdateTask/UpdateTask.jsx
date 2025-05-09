import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTask } from '../../../store/slices/taskSlice';

import styles from './UpdateTask.module.scss';

function UptadeTask({ onClose, title, description, id, sortBy }) {
    const dispatch = useDispatch()
    const [ updateValues, setUpdateValues ] = useState({
        title: title,
        description: description,
    });

    const handleTaskDataSubmit = (e) => {
        e.preventDefault();

        dispatch(updateTask({id: id, updateValues : updateValues}));
        onClose();
    };


    return(
        <form className={styles.form} onSubmit={(e) => handleTaskDataSubmit(e)}>
            <div>
               <label htmlFor="title">Title</label><br></br>
               <input id="title" value={updateValues.title} className={styles.input} type='text' onChange={(e) => (
                  setUpdateValues({
                    ...updateValues,
                    title: e.target.value,
                  })
               )} />
            </div>
             <div>
                <label htmlFor="description">Description</label><br></br>
                <textarea  id="description"
                  onChange={(e) => (
                    setUpdateValues({
                      ...updateValues,
                      description: e.target.value,
                    })
                 )}
                >{updateValues.description}</textarea>
             </div>
             <div className={styles.btnBlock}>
              <button 
                  onClick={onClose}
                  className={styles.btn} 
                  type='button'>
                   Cancel
                </button>
                <button 
                  disabled={!updateValues.description || !updateValues.title ? true : false}
                  className={styles.btn} 
                  type='submit'>
                   Save
                </button>
             </div>
        </form>
    );
}

export default UptadeTask;