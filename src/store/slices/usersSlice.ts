import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: []
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
