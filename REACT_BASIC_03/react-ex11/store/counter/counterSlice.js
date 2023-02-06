import { createSlice } from '@reduxjs/toolkit'

const initialState = {      // 초기값 설정
  value: 0 
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {       // reducer은 기존의 값을 변화시키는 거 -> 하단에 어떻게 변화시킬지 정의 
        
  }
})

export const { todoAdded, todoToggled, todosLoading } = counterSlice.actions

export default counterSlice.reducer