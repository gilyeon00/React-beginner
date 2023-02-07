import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { listSlice } from './list/ListSlice'


const reducer = combineReducers({
    list:listSlice,
});

const store = configureStore({
    reducer, 
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()        // Thunk는 default middleware
})

export default store;