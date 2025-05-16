import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../../common/Menu/Menu';

import { changeDoneTask } from '../../../../store/slices/taskSlice';
import { timeAgo, formatDate} from '../../../../helpers/timeAgo';
import { StyledSelect } from '../../SortByAndFiltreBy/FilterBy/FilterBy';

import { Tr, Td } from './TaskStyled';

function Task({ title, description, id, isDone, sortBy, timeAgoDate }) {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    const onChangeTaskDone = (e) => {
        dispatch(changeDoneTask({id: id, status: e.target.value}));
    };

    return(
        <>
              <Tr $isDone={isDone} $isdarkmode={isDarkMode ? 'true' : undefined}>
                <Td>{title}</Td>
                <Td className="description">{description}</Td>
                <Td>
                      <StyledSelect 
                        $isDone={isDone} 
                        $isdarkmode={isDarkMode ? 'true' : undefined} 
                        onChange={(e) => onChangeTaskDone(e)}
                        defaultValue={isDone ? "Done" : "Pending"}
                      >
                         <option $isdarkmode={isDarkMode ? 'true' : undefined} value="Done">Done</option>
                         <option $isdarkmode={isDarkMode ? 'true' : undefined} value="Pending">Pending</option>
                      </StyledSelect>   
                </Td>
                <Td>
                  <span title={formatDate(timeAgoDate)}>
                    {timeAgo(timeAgoDate)}
                  </span>
                  <Menu 
                      id={id} 
                      title={title}
                      description={description}
                      sortBy={sortBy}
                  />
                </Td>
              </Tr> 
    </>
    );
}

export default Task;