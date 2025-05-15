import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task/Task';
import { SpinnerCircular  } from 'spinners-react';

import { taskSort } from '../../../store/slices/taskSlice';
import { sortData } from '../../../helpers/sortData';
import { DarkTaskTable ,Thead, Th, TaskTable, Container } from './Task/TaskStyled';

import styled from 'styled-components';

export const TaskListItems = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotTask = styled.div`
  text-align: center;
  font-size: 30px;
`;

function TaskList({ sortBy , filterBy, sortTo }) {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
    const searchTaskList = useSelector(store => store.tasks.searchTaskList);
    const sortedTaskList = useSelector(store => store.tasks.sortedTaskList);
    const loading = useSelector(store => store.tasks.loading);

    const sortTask = (sort, sortByAscOrDesc) => {
        if(filterBy === "All"){
          dispatch(taskSort(sortData(searchTaskList, sort, sortByAscOrDesc)));
        } else if (filterBy === "Pending") {
          dispatch(taskSort(sortData(searchTaskList.filter(task => !task.isDone), sort, sortByAscOrDesc)));
        } else if (filterBy === "Done") {
          dispatch(taskSort(sortData(searchTaskList.filter(task => task.isDone), sort, sortByAscOrDesc)));
        }
    };

    useEffect(() => {
      sortTask(sortBy, sortTo);
    }, [sortBy, filterBy, sortTo, searchTaskList]);

    if(loading) return (
      <Spinner>
        <SpinnerCircular size={50} color="#99ff99" />
      </Spinner>
    );
    
    return(
        sortedTaskList.length ? 
        <TaskListItems>
          <Container>
            {  isDarkMode ? 
          <DarkTaskTable>
                    <Thead>
                      <tr>
                        <Th>Task Name</Th>
                        <Th>Description</Th>
                        <Th>Status</Th>
                        <Th>Start Date</Th>
                      </tr>
                    </Thead>
                    <tbody>
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
                                  timeAgoDate={task.sortDate}
                                />
                            ))
                          } 
                    </tbody>                  
                  </DarkTaskTable> : 
                  <TaskTable>
                            <Thead>
                              <tr>
                                <Th>Task Name</Th>
                                <Th>Description</Th>
                                <Th>Status</Th>
                                <Th>Start Date</Th>
                              </tr>
                            </Thead>
                       <tbody>
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
                                  timeAgoDate={task.sortDate}
                                />
                            ))
                          } 
                    </tbody>  
                    </TaskTable>
          }
          </Container>
        </TaskListItems>  :
        <NotTask>There are no task in the system yet</NotTask>
    );
}

export default TaskList;