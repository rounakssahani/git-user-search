import { createSlice } from '@reduxjs/toolkit';

//redux for the app 
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    users: [],
    totalrows: 0,
    error:false,
    isloading: false,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload.items;
      state.totalrows = action.payload.total_count
    },
    start: (state) => {
      state.isloading = true;
    },
    end: (state) => {
      state.isloading = false;
    },
    setError: (state) => {
      state.error = true;
    },
    errorRemove: (state) => {
      state.error =false;
    }
  }


});

export const { setUsers, start, end, setSearch,setError ,errorRemove} = appSlice.actions;

export default appSlice.reducer;
