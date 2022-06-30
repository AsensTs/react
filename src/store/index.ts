import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { COUNTR_FEATURE_KEY } from './features/counterSlice'
import activeRouterSlice, { ACTIVE_ROUTER_KEY } from './features/activeRouterSlice'

export const store = configureStore({
  reducer: {
    [COUNTR_FEATURE_KEY]: counterReducer,
    [ACTIVE_ROUTER_KEY]: activeRouterSlice
  }
})