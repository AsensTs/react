import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { COUNTR_FEATURE_KEY } from './features/counterSlice'
import activeRouterSlice, { ACTIVE_ROUTER_KEY } from './features/activeRouterSlice'
import routerListSlice, { ROUTER_LIST_KEY } from './features/routerListSlice'

export const store = configureStore({
  reducer: {
    [COUNTR_FEATURE_KEY]: counterReducer,
    [ACTIVE_ROUTER_KEY]: activeRouterSlice,
    [ROUTER_LIST_KEY]: routerListSlice,
  }
})