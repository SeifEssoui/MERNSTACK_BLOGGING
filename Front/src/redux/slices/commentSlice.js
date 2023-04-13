import {createSlice} from "@reduxjs/toolkit";


const commentSlice=createSlice({
    name:"comment",
    initialState:{
   
    },
reducers:{
   setCategories(state,action){
    state.categories = action.payload;
   }

    }
});

const commentReducer=commentSlice.reducer;
const commentActions =commentSlice.actions;

export{commentActions,commentReducer}
