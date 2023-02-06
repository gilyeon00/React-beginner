import { createSlice } from '@reduxjs/toolkit'
// Slice : 툴킷 세팅을 쉽게 해주는 방법 - 리듀서와 액션크리에이터를 합쳐서 세팅하는 것

const initialState = {      // 초기값 설정
  value: 0 
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {       // reducer은 기존의 값을 변화시키는 거 -> 하단에 어떻게 변화시킬지 정의 
        increment: (state, action)=> {
            // increment라는 action의 이름이 호출되면, state 값을 action으로 변경
            // state엔 옛날 값이 들어있음
            state.value += action.payload; 
            action.type = 'SET_VALUE_INCREMENT'
        },

        decrement: (state, action) => {
            state.value -= action.payload; 
            action.type = 'SET_VALUE_DECREMENT'
        }
  }
})

export const { increment,decrement } = counterSlice.actions //      액션 생성함수

export default counterSlice.reducer