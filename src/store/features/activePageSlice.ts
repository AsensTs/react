import { createSlice } from "@reduxjs/toolkit";

export const ACTIVE_PAGE_KEY = 'activePage';

interface ActivePageState {
    active: any
}

const initialState:ActivePageState  = {
    active: null
}

const { reducer: activePageSlice, actions } = createSlice({
    name: ACTIVE_PAGE_KEY,
    initialState,
    reducers: {
        setActiveRouter: (state, action) => {
            console.log('store 激活中的page -----', action.payload);
            // state.active = action.payload;
        }
    }
})

export const getState = (store: any) => store.getState().counter;
export const { setActiveRouter } = actions;
export default activePageSlice;