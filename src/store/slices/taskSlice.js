import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import fakeFetch from '../../helpers/fakeFatch';

const initialState = {
    taskList: [],
    sortedTaskList: [],
    searchTaskList: [],
    loading: true,
    errore: null,
};

export const fetchTasksDataAsync = createAsyncThunk(
    'tasks/fetchTasks',
    async (params, { rejectWithValue }) => {
        try{
            return await fakeFetch("tasks");
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        searchTask(state, action) {
            const newSearchTaskList = state.taskList.filter(item => (item.title.toLowerCase().includes(action.payload.toLowerCase()) || item.description.toLowerCase().includes(action.payload.toLowerCase())));
            state.searchTaskList = newSearchTaskList;
        },
        changeDoneTask(state, action) {
            const newTaskList = state.taskList.map(task => {
                if(task.id === action.payload) {
                    return {
                        ...task,
                        isDone: !task.isDone
                    };
                }
                return task;
            });
            state.taskList = newTaskList;
            state.searchTaskList = newTaskList;
            localStorage.setItem("tasks", JSON.stringify(newTaskList));
        },
        deleteTask(state, action) {
            const newTaskList = state.taskList.filter(task => task.id !== action.payload);
            state.taskList = newTaskList;
            state.searchTaskList = newTaskList
            localStorage.setItem("tasks", JSON.stringify(newTaskList));
        },
        addTaskDescription(state, action) {
             const newTaskList = state.taskList.map(task => {
                if(task.if === action.payload.id) {
                    return {
                        ...task,
                        description: task.description.push(action.payload.description),
                    };
                }
                return task;
             })
            state.taskList = newTaskList;
            localStorage.setItem("tasks", JSON.stringify(newTaskList));
        },
        updateTask(state, action) {
            const updatedTaskList = state.taskList.map(task => {
                if(task.id === action.payload.id){
                    return {
                        ...task,
                        ...action.payload.updateValues,
                    };
                }
                return task;
            });
            state.taskList = updatedTaskList;
            state.searchTaskList = updatedTaskList;
            localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
        },
        taskSort(state, action) {
            state.sortedTaskList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchTasksDataAsync.pending, (state) => {
              state.error = null;
              state.loading = true;
           })
           .addCase(fetchTasksDataAsync.fulfilled, (state, action) => {
              state.error = null;
              state.loading = false;
              state.taskList = action.payload;
              state.searchTaskList = action.payload;
           })
           .addCase(fetchTasksDataAsync.rejected, (state, action) => {
              state.error = action.payload;
              state.loading = false;
           })
    }
});

export const { searchTask, changeDoneTask, deleteTask, updateTask, taskSort } = taskSlice.actions;

export default taskSlice.reducer;