import { createSlice } from '@reduxjs/toolkit'
// Slice : 툴킷 세팅을 쉽게 해주는 방법 - 리듀서와 액션크리에이터를 합쳐서 세팅하는 것

const initialState = []     // 초기값 설정

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {       
        addCart: (state, action) => {
            // console.log(action.payload)
            // findindex : 반환 타입 number, 없다면 -1
            const equalItem = state.findIndex(item => item.id === action.payload.id);
            if(equalItem >= 0){
                alert("장바구니에 동일한 상품이 있습니다.")
            }else if (equalItem < 0) {
                state = state.push(action.payload)
            }
        },
        delCart: (state, action) => {
            // payload로 가져온 인덱스를 기존의 cartlist에 있는 인덱스에서 filter 후 없애줌
            // console.log(action.payload)
            const num = state.findIndex((ele) => ele.id === action.payload[0].id)
            state = state.splice(num, 1);
        },
  }
})

export const { addCart,delCart } = cartSlice.actions //      액션 생성함수

export default cartSlice.reducer