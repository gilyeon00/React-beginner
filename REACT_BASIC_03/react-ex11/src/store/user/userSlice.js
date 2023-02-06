import { createSlice } from '@reduxjs/toolkit'
// Slice : 툴킷 세팅을 쉽게 해주는 방법 - 리듀서와 액션크리에이터를 합쳐서 세팅하는 것

const initialState = {
    value : false,      // 초기값 : 로그인 안된 상태
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {       
        login : (state, action) =>{

        },
        logout : (state, action) => {

        }
  }
})

export const { login, logout } = userSlice.actions //      액션 생성함수

export default userSlice.reducer