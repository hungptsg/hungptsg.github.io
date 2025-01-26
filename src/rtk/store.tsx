import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import scoreReducer from './slice'

const reducers = combineReducers({
  score: scoreReducer
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
