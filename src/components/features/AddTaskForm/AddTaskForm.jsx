import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import addDataLocalStorage from '../../../helpers/addTasksLocalStorage';
import { fetchTasksDataAsync } from '../../../store/slices/taskSlice';
import dayjs from 'dayjs';

import {
  Form,
  StyledInput,
  StyledTextarea,
  ButtonBlock,
  StyledButton,
  ErrorText
} from './AddTaskFormStyled';

function addTaskForm({ onClose }) {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
    const [ values, setValues ] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState({
      titleErr: "",
      descriptionErr: "",
    });
    const taskList = useSelector(store => store.tasks.taskList);

    const handleTaskDataSubmit = (e) => {
        e.preventDefault();

        if (values.description.length > 1024) {
          setError(prev => ({
            ...prev,
            descriptionErr: 'Maximum character limit of 1024 exceeded!'
          }));
          return
        } else if (values.title.length > 255){
            setError(prev => ({
            ...prev,
            titleErr: 'Maximum character limit of 255 exceeded!'
          }));
          return
        } else {
          setError({
            titleErr: "",
            descriptionErr: "",
          });
        }

        addDataLocalStorage("tasks", {
            ...values,
            creationDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            sortDate: Date(),
            isDone: false,
            id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1 ,
        });
        
        dispatch(fetchTasksDataAsync());
        onClose();
    };


    return(
      <Form onSubmit={(e) => handleTaskDataSubmit(e)}>
         {error.titleErr && <ErrorText>{error.titleErr}</ErrorText>}
          <StyledInput $isdarkmode={isDarkMode ? 'true' : undefined} maxLength="255" type="text" placeholder="Enter name" onChange={(e) => (
                  setValues({
                    ...values,
                    title: e.target.value,
                  })
               )} />
          {error.descriptionErr && <ErrorText>{error.descriptionErr}</ErrorText>}
          <StyledTextarea $isdarkmode={isDarkMode ? 'true' : undefined} placeholder="Enter description"
            onChange={(e) => (
                    setValues({
                      ...values,
                      description: e.target.value,
                    })
                 )}
          />
          <ButtonBlock>
            <StyledButton $isdarkmode={isDarkMode ? 'true' : undefined} disabled={!values.title.length ? true : false} type="submit">Create</StyledButton>
          </ButtonBlock>   
       </Form>
    );
}

export default addTaskForm;