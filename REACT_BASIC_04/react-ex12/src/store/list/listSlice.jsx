// https://redux-toolkit.js.org/api/createAsyncThunk

// createAsyncThunk : Thunk 비동기 작업을 할 수 있게 해주는 미들웨어 -> action create 함수 만들어야함
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


export const getList = createAsyncThunk(
    "GET_LIST",     // type
    async() => {
        try{
            const res = await axios.get("http://localhost:8000/list")
            return res.data;
        }catch(err){
            console.error(err)
        }
    }
)

const initialState = {
  data: [],
  msg: 'default'
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  // 동기적으로 처리할 리듀서이기 때문에 따로 넣을 게 없어서, extraReducer사용 
  reducers: {
   
  },
  extraReducers: (builder) => {
    // getList함수가 완료된다면
    builder.addCase(getList.fulfilled, (state, action) => {
      state.msg = "리스트 업 완료"
      state.data = action.payload   // 내가 받은 값으로 업데이트
    })
}
})


export const {  } = listSlice.actions

export default listSlice.reducer