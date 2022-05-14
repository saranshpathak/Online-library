import {createSlice} from "@reduxjs/toolkit";

export const bookSlice = createSlice({

    name:"book",
    initialState:{
        value:"",
    },
    reducers:{
        Searching:(state,action)=>{
            state.book = action.payload;
        },
       
    },
});
export const {Searching} = bookSlice.actions;
export const selectBook = (state)=> state.book.book;
export default bookSlice.reducer;