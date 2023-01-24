import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const {data} = await axios.get('');
    return data;
});

const initialState = {
    projects: {
        items: [],
        status: 'loading',
    },
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: {
        //Get projects
        [fetchProjects.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchProjects.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },

    }
});

export const projectsReducer = projectSlice.reducer;