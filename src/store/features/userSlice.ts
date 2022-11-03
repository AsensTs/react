import { createSlice } from "@reduxjs/toolkit";

export const USER_KEY = "user";

export interface User {
    username: String
}

const initialState: User = {
    username: ""
}

const userSlice  = createSlice({
    name: USER_KEY,
    initialState,
    reducers: {
        setUsername: (state, action) => {
            console.log(state, action);
            
            state.username = action.payload;
        },
    }
})

export const getUsername = (store: any) => store.getState().user;
export const { setUsername } = userSlice.actions;
export default userSlice.reducer;