import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  users: [],
  isloading: false,
  error: null,
}
 export const  fetchUsers = createAsyncThunk('users/fetchByIdStatus', 
 async (thunkAPI) => {
  try{
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return response.data
  }
catch(error) {
   return thunkAPI.rejectWithValue('something went wrong');
}
}
 )

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) =>
     {state.isloading = true;}
     )
    .addCase(fetchUsers.fulfilled, (state, action) => {
       state.isloading = false;
       state.users = action.payload;
      })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
      console.log(action);
    })
  }
});

export default userSlice.reducer;