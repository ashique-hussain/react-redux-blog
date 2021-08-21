import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { fetchCommentsByPostId, fetchPostById, fetchPosts } from './blogAPI';

export interface BlogPosts {
  blog: [{ [key: string]: any }];
  failed?: boolean;
  blogDetails?: { [key: string]: any };
  comments?: [{ [key: string]: any }];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BlogPosts = {
  blog: [{}],
  failed: false,
  status: 'idle',
};

export const fetchPostsAsync = createAsyncThunk(
  'blog/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response;
  }
);

export const fetchPostByIdAsync = createAsyncThunk(
  'blog/fetchPostById',
  async (id: number) => {
    const response = await fetchPostById(id);
    return response;
  }
);

export const fetchCommentsByPostIdAsync = createAsyncThunk(
  'blog/fetchCommentsByPostId',
  async (id: number) => {
    const response = await fetchCommentsByPostId(id);
    return response;
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blog = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        state.status = "idle";
        state.failed = true;
      })
      .addCase(fetchPostByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogDetails = action.payload;
      })
      .addCase(fetchPostByIdAsync.rejected, (state) => {
        state.status = "idle";
        state.failed = true;
      })
      .addCase(fetchCommentsByPostIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCommentsByPostIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByPostIdAsync.rejected, (state) => {
        state.status = "idle";
        state.failed = true;
      });
  },
});

export const selectBlogPosts = (state: RootState) => state.blogPosts;

export const selectPostById = (state: RootState) => state.blogPosts?.blogDetails;

export const selectComments = (state: RootState) => state.blogPosts?.comments;

export const selectStatus = (state: RootState) => state.blogPosts?.status;

export default blogSlice.reducer;