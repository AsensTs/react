import { createSlice } from '@reduxjs/toolkit';

export const COUNTR_FEATURE_KEY = 'counter'

export interface CounterState {
    value: Number,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState =  {
    value: 0,
    status: 'idle'
}


const counterReducer = createSlice({
    name: COUNTR_FEATURE_KEY,
    initialState,
    reducers: {
        increment: (state: Object | any) => {
            state.value += 1;
        },
        decrement: (state: Object | any) => {
            state.value -= 1;
        },
        incrementByAmount: (state: Object | any, action) => {
            state.value += action.payload;
        }
    }
})

export const getState = (store: { getState: () => any; }) => store.getState().counter;
export const { increment, decrement, incrementByAmount } = counterReducer.actions
export default counterReducer.reducer
