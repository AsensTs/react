import { createSlice } from "@reduxjs/toolkit";

export const ROUTER_LIST_KEY = 'routerList';

export interface RouterList {
    routerList: any
}

const initialState: RouterList = {
    routerList: null
}

const routerListReducer = createSlice({
    name: ROUTER_LIST_KEY,
    initialState,
    reducers: {
        setRouterList: {
            reducer: (state, action) => {
                console.log(state, action.payload);
                
                state.routerList = action.payload;
            },
            prepare: (routerList): any => {
                return {
                    payload: { routerList }
                }
            }
        }
    }
})

export const getRouterList = (store: any) => store.getState().routerList;
export const { setRouterList } = routerListReducer.actions;
export default routerListReducer.reducer;