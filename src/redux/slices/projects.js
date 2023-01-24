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
            state.projects.items = [];
            state.projects.status = 'loading';
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.projects.items = action.payload;
            state.projects.status = 'loaded';
        },
        [fetchProjects.rejected]: (state) => {
            state.projects.items = [];
            state.projects.status = 'error';
        },

    }
});

export const projectsReducer = projectSlice.reducer;