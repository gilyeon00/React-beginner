// store 세팅
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
// import userSlice from './user/userSlice'

// 여러 reducer을 사용할 때 
const rootReducer = combineReducers({
    cart:cartSlice,
    // user:userSlice
})

const store = configureStore({
    reducer:rootReducer
})

export default configureStore({
    reducer: {
      cart:cartSlice
    }
  })