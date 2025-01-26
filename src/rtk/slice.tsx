import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'








type ScoreState = {
  series: string[]
}

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    series: [],
  } as ScoreState,
  reducers: {
    editRound(state, action: PayloadAction<number>) {

    },
    removeRound(state, action: PayloadAction<number>) {

    },
  },
})

export const {
  editRound, removeRound,
} = scoreSlice.actions
export default scoreSlice.reducer
