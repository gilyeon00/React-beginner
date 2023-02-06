// store 세팅
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'

export default configureStore({
  reducer: {        // store는 다음의 reducer로 구성된다.
    counter:counterSlice
  }
})
