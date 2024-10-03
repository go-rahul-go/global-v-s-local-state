import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increase(state,action)
        {
            return state+=1;
        },
        decrease(state,action)
        {
            if(state>0)
            {
                return state-=1;
            }
        }
    }
})

export const {increase,decrease} = countSlice.actions;

export default countSlice.reducer;
