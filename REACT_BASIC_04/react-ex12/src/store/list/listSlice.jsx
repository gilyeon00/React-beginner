// https://redux-toolkit.js.org/api/createAsyncThunk

// createAsyncThunk : Thunk 비동기 작업을 할 수 있게 해주는 미들웨어 -> action create 함수 만들어야함
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


export const getList = createAsyncThunk(
    "GET_LIST",     // type
    async() => {
        try{
            const res = await axios.get("http://localhost:8000/list");
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)

export const addList = createAsyncThunk(
    "ADD_LIST",
    async(newList)=>{
        try{
            const res = await axios.post("http://localhost:8000/list",newList);
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)

export const deleteList = createAsyncThunk(
    "DELETE_LIST",
    async(id) => {
        try{
            const res = await axios.delete(`http://localhost:8000/${id}`);
            return id;
        }catch(err) {
            console.log(err)
        }
    }
)

export const updateList = createAsyncThunk(
    "UPDATE_LIST",
    async({id, content}) => {
        try{
            const res = await axios.put(`http://localhost:8000/${id}`,{content:content});
            return {id, content}
        }catch(err) {
            console.log(err)
        }
    }
)

const initialState = {
  data: [],
  msg: "default"
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
        console.log('스테이트 값',state)
      state.msg = "리스트 업 완료"
      state.data = action.payload   // 내가 받은 값으로 업데이트
    })
    builder.addCase(addList.fulfilled, (state, action) => {
        state.msg = "새로운 리스트 업 추가 완료"
        state.data.push(action.payload)   
    })
    builder.addCase(deleteList.fulfilled, (state, action) => {
        state.msg = "리스트 삭제 완료"
        // id 같으면 삭제 
        state.data = state.data.filter(item => item.id !== action.payload.id)
    })
    builder.addCase(updateList.fulfilled, (state, action) => {
        state.msg = "리스트 수정 완료"
        const num = state.data.findIndex(item => item.id === action.payload.id)
        // id 같으면 수정
        state.data.splice(num, 1, action.payload)
    })
}
})



// export const {  } = listSlice.actions

export default listSlice.reducer