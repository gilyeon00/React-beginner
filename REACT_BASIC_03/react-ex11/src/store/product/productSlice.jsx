import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
    "GET_PRODUCT",
    async () => {
        try{
            const res = await axios.get("https://my-json-server.typicode.com/gilyeon00/React-study/productList");
            return res.data;
        } catch(err){
            console.error(err);
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState:{
        value:[]
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.value=action.payload;
        })
    }

})
export default productSlice.reducer