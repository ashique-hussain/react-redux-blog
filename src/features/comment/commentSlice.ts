import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { fetchCommentsByPostId } from './commentAPI';

export interface CommentPosts {
    failed?: boolean;
    postId?: number;
    comments?: [{ [key: string]: any }];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CommentPosts = {
    failed: false,
    status: 'idle',
};


export const fetchCommentsByPostIdAsync = createAsyncThunk(
    'comment/fetchCommentsByPostId',
    async (id: number) => {
        const response = await fetchCommentsByPostId(id);
        response.postId = id;
        return response;
    }
);

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByPostIdAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCommentsByPostIdAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.comments = action.payload;
                state.postId = action.payload.postId;
            })
            .addCase(fetchCommentsByPostIdAsync.rejected, (state) => {
                state.status = "idle";
                state.failed = true;
            });
    },
});

export const selectComments = (state: RootState) => state.postComments?.comments;

export const selectStatus = (state: RootState) => state.postComments?.status;

export const selectPostId = (state: RootState) => state.postComments?.postId;


export default commentSlice.reducer;