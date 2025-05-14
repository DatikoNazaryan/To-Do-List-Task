import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../../common/Menu/Menu';

import { changeDoneTask } from '../../../../store/slices/taskSlice';
import { timeAgo, formatDate} from '../../../../helpers/timeAgo';

import { Container, TaskTable, Thead, Th, Tbody, Td, DarkTaskTable } from './TaskStyled';

function Task({ title, description, id, isDone, sortBy, timeAgoDate }) {
    const dispatch = useDispatch();
    const [ isChecked, setIsChecked ] = useState(isDone);
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    const onChangeTaskDone = () => {
        dispatch(changeDoneTask(id));
        setIsChecked(prev => !prev);
    };

    return(
        <Container>
      {isDarkMode ? (
        <DarkTaskTable $isDone={isDone}>
          <Thead>
            <tr>
              <Th>Task Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Start Date</Th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
                <Td>{title}</Td>
                <Td className="description">{description}</Td>
                <Td>
                    <input 
                        id={id} 
                        type='checkbox' 
                        defaultChecked={isDone}
                        onChange={onChangeTaskDone}
                        style={{ marginRight : '5px'}}
                    />
                    <label htmlFor={id}>{"Done"}</label>
                </Td>
                <Td>
                  <span title={formatDate(timeAgoDate)}>
                    {timeAgo(timeAgoDate)}
                  </span>
                </Td>
              </tr>
          </Tbody>
        </DarkTaskTable>
      ) : (
        <TaskTable>
          <Thead>
            <tr>
              <Th>Task Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Start Date</Th>
            </tr>
          </Thead>
          <Tbody $isDone={isDone}>
              <tr>
                <Td>{title}</Td>
                <Td className="description">{description}</Td>
                <Td>
                    <input 
                        id={id} 
                        type='checkbox' 
                        defaultChecked={isDone}
                        onChange={onChangeTaskDone}
                    />
                    <label htmlFor={id}>{"Done"}</label>
                </Td>
                <Td>
                  <span title={formatDate(timeAgoDate)}>
                    {timeAgo(timeAgoDate)}
                  </span>
                </Td>
              </tr>
          </Tbody>
        </TaskTable>
      )}
       <Menu 
            id={id} 
            title={title}
            description={description}
            sortBy={sortBy}
        />   
    </Container>
    );
}

export default Task;