import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTasks: [],
    name: "",
    description: "",
    timeline: "",
    status: null,
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        updateFormField: (state, action) => {
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetFormField: (state) => {
            state.name = "";
            state.description = "";
            state.timeline = "";
        },
        setAllTasks: (state, action) => {
           const data = action.payload;
           const taskWithCreationTime = {
                ...data,
                creationTime: Date.now(),
                status: "In Progress"
           };
           state.allTasks = [...state.allTasks, taskWithCreationTime]
        },
        updateTaskStatus: (state, action) => {
            const { id, newStatus } = action.payload;
            const taskIndex = state.allTasks.findIndex((task) => task.name === id);
            if (taskIndex !== -1) {
                state.allTasks[taskIndex].status = newStatus;
            }
        },
        deleteTask: (state, action) => {
            const {id} = action.payload;
            state.allTasks = state.allTasks.filter((task) => task.name !== id);
        }
    }
})

export default tasksSlice.reducer;
export const { updateFormField, resetFormField, setAllTasks, updateTaskStatus, deleteTask } = tasksSlice.actions 