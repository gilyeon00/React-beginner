import { createSlice } from '@reduxjs/toolkit'
// Slice : 툴킷 세팅을 쉽게 해주는 방법 - 리듀서와 액션크리에이터를 합쳐서 세팅하는 것

const initialState = []     // 초기값 설정

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {       
        addCart: (state, action) => {
            // console.log(action.payload)
            const equalItem = state.findIndex(item => item.id === action.payload.id);
            if(equalItem >= 0){
                alert("장바구니에 동일한 상품이 있습니다.")
            }else{
                state = state.push(action.payload)
            }
        },
        delCart: (state, action) => {
            state = state.pop(action.payload)
        },
  }
})

export const { addCart,delCart } = cartSlice.actions //      액션 생성함수

export default cartSlice.reducer