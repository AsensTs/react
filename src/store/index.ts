import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { COUNTR_FEATURE_KEY } from './features/counterSlice'
import activePageSlice, { ACTIVE_PAGE_KEY } from './features/activePageSlice'

export const store = configureStore({
  reducer: {
    [COUNTR_FEATURE_KEY]: counterReducer,
    [ACTIVE_PAGE_KEY]: activePageSlice
  }
})