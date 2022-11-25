import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { placesReducer } from "./places/placesSlice"

export const store = configureStore({
  reducer: {
    placesReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
