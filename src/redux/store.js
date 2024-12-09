import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "./features/tasks/tasksSlice"
import { saveToLocalStorage, getFromLocalStorage } from '../components/localStorage'


const preloadedState = getFromLocalStorage();

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    preloadedState,
})


store.subscribe(() => {
    saveToLocalStorage(store.getState())
})