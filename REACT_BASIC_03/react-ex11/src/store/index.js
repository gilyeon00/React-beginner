// store 세팅
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import userSlice from './user/userSlice'


// https://www.npmjs.com/package/reduxjs-toolkit-persist
// persistReducer 가 실행될 때 persist를 같이 사용하려고, 묶어서 사용한다
import {persistStore, persistReducer} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'       // 로컬 스토리지
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'  세션 스토리지

import {  getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
    key : 'root',
    storage
}

// 여러 reducer을 사용할 때 
const rootReducer = combineReducers({
    cart:cartSlice,
    user:userSlice
})

// rootreducer와 persist를 묶어서 사용한다.
// redux-persist를 사용해서 로컬 스토리지에 state값을 저장하고, 페이지가 새로고침되면 init이 안되고 storage에 저장된 state값으로 대체 -> 초기화 안됨
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    // reducer:rootReducer 묶었기 때문에 rootReducer가 아닌 persistedReducer가 되어야함
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
  })
})

// 유지하고 싶은걸(store) 인자로 넣어줘야함
const persistor = persistStore(store)

 export {store, persistor};
  