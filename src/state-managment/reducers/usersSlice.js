import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStat = {
    users: [],
    loading: false,
    error: null
}


export const usersSlice = createSlice({
    name: 'users',
    initialStat,
    extraReducers: createAsyncThunk(() => {
        
    })
})