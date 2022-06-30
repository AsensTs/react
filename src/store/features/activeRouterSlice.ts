import { createSlice } from "@reduxjs/toolkit";

export const ACTIVE_ROUTER_KEY = 'activeRouter';

export interface ActiveRouter {
    activeRouter: object
}

const initialState: ActiveRouter = {
    activeRouter: {}
}

const activeRouterReducer = createSlice({
    name: ACTIVE_ROUTER_KEY,
    initialState,
    reducers: {
        setActiveRouter: {
            reducer: (state, action) => {
                console.log(state, action.payload);
                
                state.activeRouter = action.payload;
            },
            prepare: (active): any => {
                return {
                    payload: { active }
                }
            }
        }
    }
})

export const { setActiveRouter } = activeRouterReducer.actions;
export default activeRouterReducer.reducer;