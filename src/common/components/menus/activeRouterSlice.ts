import { createSlice } from "@reduxjs/toolkit";

export const ACTIVE_ROUTER_KEY = 'activeRouter';

export interface ActiveRouter {
    activeRouter: object
}

const initialState: ActiveRouter = {
    activeRouter: {}
}

const activeRouter = createSlice({
    name: ACTIVE_ROUTER_KEY,
    initialState,
    reducers: {
        setActiveRouter: {
            reducer: (state, action) => {
                state.activeRouter = action.payload;
            },
            prepare: (active): any => {
                console.log(active);
                
                // 这里return { payload:{ active } } 可以触发reducer方法
                // 可以在这一步处理数据。
                return {
                    payload: { active }
                }
            }
        }
    }
})

export const getActiveRouter = (store: any) => store.getState()[ACTIVE_ROUTER_KEY].activeRouter;
export const { setActiveRouter } = activeRouter.actions;
export default activeRouter.reducer;