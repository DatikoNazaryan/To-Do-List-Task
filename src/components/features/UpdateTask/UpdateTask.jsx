import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateTask } from '../../../store/slices/taskSlice';

import {
  Form,
  StyledInput,
  StyledTextarea,
  ButtonBlock,
  StyledButton,
  ErrorText
} from '../AddTaskForm/AddTaskFormStyled';

function UptadeTask({ onClose, title, description, id }) {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
    const [ updateValues, setUpdateValues ] = useState({
        title: title,
        description: description,
    });
    const [error, setError] = useState({
      titleErr: "",
      descriptionErr: "",
    });

    const handleTaskDataUpdateSubmit = (e) => {
        e.preventDefault();

        if (updateValues.description.length > 1024) {
          setError(prev => ({
            ...prev,
            descriptionErr: 'Maximum character limit of 1024 exceeded!'
          }));
          return
        } else if (updateValues.title.length > 255){
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

        dispatch(updateTask({id: id, updateValues : updateValues}));
        onClose();
    };

    return(
      <Form onSubmit={(e) => handleTaskDataUpdateSubmit(e)}>
               {error.titleErr && <ErrorText>{error.titleErr}</ErrorText>}
                <StyledInput
                    $isDarkMode={isDarkMode}
                    maxLength="255" 
                    type="text"
                    placeholder="Enter name" 
                    value={updateValues.title}
                    onChange={(e) => (
                    setUpdateValues({
                        ...updateValues,
                        title: e.target.value,
                     })
                  )} />
                {error.descriptionErr && <ErrorText>{error.descriptionErr}</ErrorText>}
                <StyledTextarea 
                  $isDarkMode={isDarkMode}
                  value={updateValues.description}
                  placeholder="Enter description" 
                  onChange={(e) => (
                   setUpdateValues({
                      ...updateValues,
                      description: e.target.value,
                  })
               )} 
                />
                <ButtonBlock>
                  <StyledButton onClick={onClose} type="button">Cancle</StyledButton>
                  <StyledButton $isDarkMode={isDarkMode} disabled={!updateValues.title ? true : false} type="submit">Save</StyledButton>
                </ButtonBlock>   
          </Form>
    );
}

export default UptadeTask;